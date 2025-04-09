
import { createContext, useContext, useState, ReactNode } from "react";
import { VenueType } from "../data/venues";

type SearchContextType = {
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
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [capacityRange, setCapacityRange] = useState<[number, number]>([0, 200]);
  const [activeAmenities, setActiveAmenities] = useState<string[]>([]);
  const [filteredVenues, setFilteredVenues] = useState<VenueType[]>([]);

  return (
    <SearchContext.Provider
      value={{
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
