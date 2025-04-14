import { useEffect } from "react";
import { events } from "../data/events";
import { useSearch } from "@/contexts/SearchContext";
import { toast } from "@/hooks/use-toast";

export const useEventFilter = () => {
  const {
    searchQuery,
    activeEventCategories,
    eventPriceRange,
    activeTimeOfDay,
    activeLanguages,
    setFilteredEvents
  } = useSearch();

  useEffect(() => {
    // Apply all active filters
    let filtered = events;

    // Apply search filter for both location and event name
    if (searchQuery && searchQuery.trim() !== "") {
      // First try to find exact matches in location
      const locationMatches = filtered.filter(event =>
        `${event.location.city}, ${event.location.state}`.toLowerCase().includes(searchQuery.toLowerCase())
      );

      // If we have location matches, use those
      if (locationMatches.length > 0) {
        filtered = locationMatches;
      } else {
        // Otherwise, check for event name matches
        filtered = filtered.filter(event =>
          event.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }
    }

    // Apply category filters
    if (activeEventCategories.length > 0) {
      filtered = filtered.filter(event =>
        event.details.categories.some(category => activeEventCategories.includes(category))
      );
    }

    // Apply price range filter
    filtered = filtered.filter(event =>
      event.details.price >= eventPriceRange[0] && 
      event.details.price <= eventPriceRange[1]
    );

    // Apply time of day filters
    if (activeTimeOfDay.length > 0) {
      filtered = filtered.filter(event =>
        activeTimeOfDay.includes(event.details.timeOfDay)
      );
    }

    // Apply language filters
    if (activeLanguages.length > 0) {
      filtered = filtered.filter(event =>
        activeLanguages.includes(event.details.language)
      );
    }

    // Set the filtered events
    setFilteredEvents(filtered);
  }, [
    searchQuery,
    activeEventCategories,
    eventPriceRange,
    activeTimeOfDay, 
    activeLanguages,
    setFilteredEvents
  ]);

  const handleSearch = (query: string) => {
    // If query is empty, just return without showing any toast
    if (!query || query.trim() === "") {
      return;
    }

    // Find exact event match
    const exactEventMatch = events.find(
      event => event.name.toLowerCase() === query.toLowerCase()
    );

    if (exactEventMatch) {
      toast({
        title: "Event found",
        description: `Showing details for "${exactEventMatch.name}"`,
      });
    } else {
      // Check if it's a location search
      const locationSearch = query.toLowerCase();
      const locationMatches = events.filter(event =>
        `${event.location.city}, ${event.location.state}`.toLowerCase().includes(locationSearch)
      );

      if (locationMatches.length > 0) {
        toast({
          title: "Search results",
          description: `Found ${locationMatches.length} events in "${query}"`,
        });
      } else if (query) {
        toast({
          title: "No exact matches",
          description: `Showing all events matching "${query}"`,
        });
      }
    }
  };

  return {
    handleSearch
  };
};
