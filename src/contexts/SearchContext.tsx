
import { createContext, useContext, useState, ReactNode } from "react";
import { VenueType, venues } from "../data/venues";
import { EventType, events } from "../data/events";
import getMaxCapacity from "@/components/MaxCapacity";

type ContentType = "venues" | "events" | "experiences";

type SearchContextType = {
  contentType: ContentType;
  setContentType: (type: ContentType) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeFilters: string[];
  setActiveFilters: (filters: string[]) => void;
  capacityRange: [number, number];
  setCapacityRange: (range: [number, number]) => void;
  activeAmenities: string[];
  setActiveAmenities: (amenities: string[]) => void;
  filteredVenues: VenueType[];
  setFilteredVenues: (venues: VenueType[]) => void;
  allVenues: VenueType[]; // Access to all venues
  
  // Events related state
  filteredEvents: EventType[];
  setFilteredEvents: (events: EventType[]) => void;
  allEvents: EventType[]; // Access to all events
  eventPriceRange: [number, number];
  setEventPriceRange: (range: [number, number]) => void;
  activeEventCategories: string[];
  setActiveEventCategories: (categories: string[]) => void;
  activeTimeOfDay: string[];
  setActiveTimeOfDay: (times: string[]) => void;
  activeLanguages: string[];
  setActiveLanguages: (languages: string[]) => void;
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [contentType, setContentType] = useState<ContentType>("venues");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [capacityRange, setCapacityRange] = useState<[number, number]>([0, getMaxCapacity()]);
  const [activeAmenities, setActiveAmenities] = useState<string[]>([]);
  const [filteredVenues, setFilteredVenues] = useState<VenueType[]>([]);
  
  // Events state
  const [filteredEvents, setFilteredEvents] = useState<EventType[]>([]);
  const [eventPriceRange, setEventPriceRange] = useState<[number, number]>([0, 100]);
  const [activeEventCategories, setActiveEventCategories] = useState<string[]>([]);
  const [activeTimeOfDay, setActiveTimeOfDay] = useState<string[]>([]);
  const [activeLanguages, setActiveLanguages] = useState<string[]>([]);

  return (
    <SearchContext.Provider
      value={{
        contentType,
        setContentType,
        searchQuery,
        setSearchQuery,
        activeFilters,
        setActiveFilters,
        capacityRange,
        setCapacityRange,
        activeAmenities,
        setActiveAmenities,
        filteredVenues,
        setFilteredVenues,
        allVenues: venues,
        // Events related context
        filteredEvents,
        setFilteredEvents,
        allEvents: events,
        eventPriceRange,
        setEventPriceRange,
        activeEventCategories,
        setActiveEventCategories,
        activeTimeOfDay,
        setActiveTimeOfDay,
        activeLanguages,
        setActiveLanguages
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};
