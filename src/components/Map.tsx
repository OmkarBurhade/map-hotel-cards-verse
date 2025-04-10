
import { useEffect, useRef } from "react";
import L from "leaflet";
import { VenueType } from "../data/venues";
import { useIsMobile } from "@/hooks/use-mobile";

interface MapProps {
  venues: VenueType[];
  activeVenueId: string | null;
  onMarkerClick: (id: string) => void;
}

// Los Angeles coordinates
const LOS_ANGELES_COORDINATES: [number, number] = [34.0522, -118.2437];
const DEFAULT_ZOOM = 15;

const Map = ({ venues, activeVenueId, onMarkerClick }: MapProps) => {
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<{ [key: string]: L.Marker }>({});
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Initialize map
    if (!mapRef.current) {
      mapRef.current = L.map('map', {
        center: LOS_ANGELES_COORDINATES,
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

    // Always default to Los Angeles first
    if (venues.length === 0 || (venues.length > 0 && !activeVenueId)) {
      mapRef.current.setView(LOS_ANGELES_COORDINATES, DEFAULT_ZOOM);
    }
    // Calculate center of visible venues if there are any and an active venue is selected
    else if (venues.length > 0) {
      try {
        if (activeVenueId) {
          const activeVenue = venues.find(v => v.id === activeVenueId);
          if (activeVenue) {
            // Set appropriate zoom level based on whether it's an international venue
            const isInternational = activeVenue.location.distance.includes("International");
            const zoomLevel = isInternational ? 4 : 15;
            
            mapRef.current.setView(activeVenue.location.coordinates, zoomLevel, { animate: true, duration: 0.5 });
          } else {
            // Filter only Los Angeles venues if available
            const laVenues = venues.filter(v => v.location.city.includes("Los Angeles"));
            if (laVenues.length > 0) {
              const bounds = L.latLngBounds(laVenues.map(v => v.location.coordinates));
              mapRef.current.fitBounds(bounds, { padding: [50, 50], maxZoom: 13 });
            } else {
              // If no LA venues, fit to available venues
              const bounds = L.latLngBounds(venues.map(v => v.location.coordinates));
              mapRef.current.fitBounds(bounds, { 
                padding: [50, 50], 
                maxZoom: venues.some(v => v.location.city.includes("International")) ? 2 : 13 
              });
            }
          }
        } else {
          // Focus on Los Angeles venues if available
          const laVenues = venues.filter(v => v.location.city.includes("Los Angeles"));
          if (laVenues.length > 0) {
            const bounds = L.latLngBounds(laVenues.map(v => v.location.coordinates));
            mapRef.current.fitBounds(bounds, { padding: [50, 50], maxZoom: 13 });
          } else {
            mapRef.current.setView(LOS_ANGELES_COORDINATES, DEFAULT_ZOOM);
          }
        }
      } catch (e) {
        console.error("Error setting map bounds:", e);
        // Fallback to Los Angeles view
        mapRef.current.setView(LOS_ANGELES_COORDINATES, DEFAULT_ZOOM);
      }
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
        const zoomLevel = isInternational ? 4 : 15;
        
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
