
import { useEffect, useRef } from "react";
import L from "leaflet";
import { VenueType } from "../data/venues";
import { useIsMobile } from "@/hooks/use-mobile";
import { MapPin } from "lucide-react";

interface MapProps {
  venues: VenueType[];
  activeVenueId: string | null;
  onMarkerClick: (id: string) => void;
}

const Map = ({ venues, activeVenueId, onMarkerClick }: MapProps) => {
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<{ [key: string]: L.Marker }>({});
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Initialize map
    if (!mapRef.current) {
      mapRef.current = L.map('map', {
        center: [34.052235, -118.243683], // Los Angeles
        zoom: 13,
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
      
      // Create pulsing marker with enhanced styling
      const icon = L.divIcon({
        html: el,
        className: 'custom-marker',
        iconSize: isActive ? [28, 28] : [20, 20],
        iconAnchor: isActive ? [14, 14] : [10, 10]
      });
      
      const marker = L.marker(venue.location.coordinates, { 
        icon,
        riseOnHover: true,  // Rise above other markers when hovered
        title: venue.name   // Show tooltip on hover
      }).addTo(mapRef.current!);
      
      // Add tooltip with name
      marker.bindTooltip(venue.name, {
        permanent: false,
        direction: 'top',
        className: 'bg-white shadow rounded px-2 py-1 text-sm font-medium'
      });
      
      marker.on('click', () => {
        onMarkerClick(venue.id);
      });
      
      markersRef.current[venue.id] = marker;
    });

    // Update map when active venue changes
    if (activeVenueId) {
      const activeVenue = venues.find(v => v.id === activeVenueId);
      if (activeVenue) {
        mapRef.current.setView(activeVenue.location.coordinates, 15, { animate: true, duration: 0.5 });
        
        // Update marker style
        Object.entries(markersRef.current).forEach(([id, marker]) => {
          const el = marker.getElement();
          if (el) {
            if (id === activeVenueId) {
              el.querySelector('.venue-marker')?.classList.add('active');
            } else {
              el.querySelector('.venue-marker')?.classList.remove('active');
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
