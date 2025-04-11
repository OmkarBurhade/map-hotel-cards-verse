
import { useEffect, useRef } from "react";
import L from "leaflet";
import { VenueType } from "../data/venues";
import { useIsMobile } from "@/hooks/use-mobile";

interface MapProps {
  venues: VenueType[];
  activeVenueId: string | null;
  onMarkerClick: (id: string) => void;
}

// Default coordinates and zoom
const DEFAULT_COORDINATES: [number, number] = [20, 0]; // Center of world map
const DEFAULT_ZOOM = 2;

const Map = ({ venues, activeVenueId, onMarkerClick }: MapProps) => {
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<{ [key: string]: L.Marker }>({});
  const isMobile = useIsMobile();

  useEffect(() => {
    // Initialize map
    if (!mapRef.current) {
      mapRef.current = L.map('map', {
        center: DEFAULT_COORDINATES,
        zoom: DEFAULT_ZOOM,
        zoomControl: !isMobile,
        attributionControl: true,
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapRef.current);

      if (isMobile) {
        mapRef.current.zoomControl.setPosition('topright');
      }
    }

    // Handle empty venues list
    if (venues.length === 0) {
      mapRef.current.setView(DEFAULT_COORDINATES, DEFAULT_ZOOM);
      return;
    }

    try {
      if (activeVenueId) {
        const activeVenue = venues.find(v => v.id === activeVenueId);
        if (activeVenue) {
          // Determine zoom level based on if it's an international venue
          const isInternational = activeVenue.location.distance.includes("International");
          const zoomLevel = isInternational ? 6 : 10;

          mapRef.current.setView(activeVenue.location.coordinates, zoomLevel, { animate: true, duration: 0.5 });
        } else {
          // Fit map to show all venues
          const bounds = L.latLngBounds(venues.map(v => v.location.coordinates));
          mapRef.current.fitBounds(bounds, { padding: [50, 50], maxZoom: 4 });
        }
      } else {
        // Handle empty venues list
        if (venues.length === 0) {
          mapRef.current.setView(DEFAULT_COORDINATES, DEFAULT_ZOOM);
          return;
        }

        // 🟡 Set view to a random venue's location with zoom level 12
        const randomVenue = venues[Math.floor(Math.random() * venues.length)];
        mapRef.current.setView(randomVenue.location.coordinates, 12, {
          animate: true,
          duration: 0.5,
        });

      }
    } catch (e) {
      console.error("Error setting map bounds:", e);
      // Fallback to world view
      mapRef.current.setView(DEFAULT_COORDINATES, DEFAULT_ZOOM);
    }

    // Clear existing markers
    Object.values(markersRef.current).forEach(marker => {
      marker.remove();
    });
    markersRef.current = {};

    // Add markers for venues
    venues.forEach(venue => {
      const isActive = venue.id === activeVenueId;

      const el = document.createElement('div');
      el.className = `venue-marker ${isActive ? 'active' : ''}`;

      // Create enhanced marker with custom HTML for better visibility
      const markerHtml = `
        <div class="marker-container">
          <div class="marker-pulse"></div>
          <div class="marker-icon ${isActive ? 'active' : ''}"></div>
        </div>
      `;

      const icon = L.divIcon({
        html: markerHtml,
        className: 'custom-marker',
        iconSize: isActive ? [40, 40] : [30, 30],
        iconAnchor: isActive ? [20, 20] : [15, 15]
      });

      const marker = L.marker(venue.location.coordinates, {
        icon,
        riseOnHover: true,
        title: venue.name
      }).addTo(mapRef.current!);

      // Add tooltip with name and location
      marker.bindTooltip(
        `<div class="font-medium">${venue.name}</div>
         <div class="text-xs">${venue.location.address}</div>
         <div class="text-xs">${venue.location.city}</div>`,
        {
          permanent: false,
          direction: 'top',
          className: 'bg-white shadow-lg rounded-lg px-3 py-2 text-sm font-medium'
        }
      );

      marker.on('click', () => {
        onMarkerClick(venue.id);
      });

      markersRef.current[venue.id] = marker;
    });

    // Update map when active venue changes
    if (activeVenueId) {
      const activeVenue = venues.find(v => v.id === activeVenueId);
      if (activeVenue) {
        // Set appropriate zoom level based on whether it's an international venue
        const isInternational = activeVenue.location.distance.includes("International");
        const zoomLevel = isInternational ? 6 : 10;

        mapRef.current.setView(activeVenue.location.coordinates, zoomLevel, { animate: true, duration: 0.5 });

        // Update all markers to reflect active state
        Object.entries(markersRef.current).forEach(([id, marker]) => {
          const el = marker.getElement();
          if (el) {
            const iconElement = el.querySelector('.marker-icon');
            if (id === activeVenueId) {
              iconElement?.classList.add('active');
            } else {
              iconElement?.classList.remove('active');
            }
          }
        });
      }
    }

    return () => {
      // Clean up
    };
  }, [venues, activeVenueId, isMobile, onMarkerClick]);

  return <div id="map" className="w-full h-full rounded-lg shadow-md" />;
};

export default Map;
