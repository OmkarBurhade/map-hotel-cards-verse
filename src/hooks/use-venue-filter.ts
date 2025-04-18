import { useEffect } from "react";
import { venues } from "../data/venues";
import { useSearch } from "@/contexts/SearchContext";
import { toast } from "@/hooks/use-toast";

// Haversine formula to calculate distance between two geographic coordinates
export const calculateDistance = (
  lat1: number, 
  lon1: number, 
  lat2: number, 
  lon2: number
): number => {
  const R = 6371; // Radius of the earth in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  const d = R * c; // Distance in km
  return d;
};

export const useVenueFilter = () => {
  const { 
    searchQuery, 
    activeFilters, 
    capacityRange, 
    activeAmenities, 
    setFilteredVenues 
  } = useSearch();

  useEffect(() => {
    // Apply all active filters
    let filtered = venues;
    
    // Apply search filter for both location and venue name
    if (searchQuery && searchQuery.trim() !== "") {
      // First try to find exact matches in location
      const locationMatches = filtered.filter(venue => 
        venue.location.city.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      // If we have location matches, use those
      if (locationMatches.length > 0) {
        filtered = locationMatches;
      } else {
        // Otherwise, check for venue name matches
        filtered = filtered.filter(venue => 
          venue.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }
    }
    
    // Apply tag filters if any are active
    if (activeFilters.length > 0) {
      filtered = filtered.filter(venue => 
        venue.tags.some(tag => activeFilters.includes(tag))
      );
    }
    
    // Apply capacity filter
    filtered = filtered.filter(venue => 
      venue.details.capacity >= capacityRange[0] && 
      venue.details.capacity <= capacityRange[1]
    );
    
    // Apply amenity filters
    if (activeAmenities.length > 0) {
      filtered = filtered.filter(venue => 
        activeAmenities.every(amenity => venue.details.amenities.includes(amenity))
      );
    }
    
    // Set the filtered venues
    setFilteredVenues(filtered);
  }, [activeFilters, capacityRange, searchQuery, activeAmenities, setFilteredVenues]);

  const handleSearch = (query: string) => {
    // If query is empty, just return without showing any toast
    if (!query || query.trim() === "") {
      return;
    }
    
    // Find exact venue match
    const exactVenueMatch = venues.find(
      venue => venue.name.toLowerCase() === query.toLowerCase()
    );
    
    if (exactVenueMatch) {
      toast({
        title: "Garden found",
        description: `Showing details for "${exactVenueMatch.name}"`,
      });
    } else {
      // Check if it's a location search
      const locationSearch = query.toLowerCase();
      const locationMatches = venues.filter(venue => 
        venue.location.city.toLowerCase().includes(locationSearch)
      );
      
      if (locationMatches.length > 0) {
        toast({
          title: "Search results",
          description: `Found ${locationMatches.length} gardens in "${query}"`,
        });
      } else if (query) {
        toast({
          title: "No exact matches",
          description: `Showing all gardens matching "${query}"`,
        });
      }
    }
  };

  return {
    handleSearch,
    calculateDistance
  };
};
