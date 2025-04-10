
import { useEffect } from "react";
import { venues } from "../data/venues";
import { useSearch } from "@/contexts/SearchContext";
import { toast } from "@/hooks/use-toast";

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
      filtered = filtered.filter(venue => 
        venue.location.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        venue.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else {
      // When no search query, default to Los Angeles venues
      filtered = filtered.filter(venue => 
        venue.location.city.includes("Los Angeles")
      );
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
    handleSearch
  };
};
