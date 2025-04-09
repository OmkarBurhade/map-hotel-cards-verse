
import { useState, useEffect } from "react";
import Header from "../components/Header";
import FilterBar from "../components/FilterBar";
import Map from "../components/Map";
import VenuePopup from "../components/VenuePopup";
import UtilityButtons from "../components/UtilityButtons";
import VenueList from "../components/VenueList";
import SearchResultsInfo from "../components/SearchResultsInfo";
import { venues, VenueType } from "../data/venues";
import { useIsMobile } from "@/hooks/use-mobile";
import { useVenueFilter } from "@/hooks/use-venue-filter";
import { SearchProvider, useSearch } from "@/contexts/SearchContext";

const IndexContent = () => {
  const [activeVenueId, setActiveVenueId] = useState<string | null>(null);
  const [selectedVenue, setSelectedVenue] = useState<VenueType | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const isMobile = useIsMobile();
  
  const { 
    setSearchQuery, 
    setActiveFilters, 
    setCapacityRange,
    activeAmenities, 
    setActiveAmenities,
    filteredVenues
  } = useSearch();
  
  const { handleSearch } = useVenueFilter();

  // Filter Los Angeles venues on initial load
  useEffect(() => {
    const laVenues = venues.filter(venue => venue.location.city.includes("Los Angeles"));
    if (laVenues.length > 0) {
      // No need to set filteredVenues here as the useVenueFilter hook will handle it
    }
  }, []);

  const handleSearchSubmit = (query: string) => {
    setSearchQuery(query);
    handleSearch(query);
    
    // Find exact venue match
    const exactVenueMatch = venues.find(
      venue => venue.name.toLowerCase() === query.toLowerCase()
    );
    
    if (exactVenueMatch) {
      // If exact venue match found, select it and open popup
      setSelectedVenue(exactVenueMatch);
      setActiveVenueId(exactVenueMatch.id);
      setIsPopupOpen(true);
    }
  };

  const handleFilterChange = (filters: string[]) => {
    setActiveFilters(filters);
  };

  const handleCapacityChange = (capacity: [number, number]) => {
    setCapacityRange(capacity);
  };

  const handleAmenityToggle = (amenity: string) => {
    setActiveAmenities(prev => 
      prev.includes(amenity)
        ? prev.filter(a => a !== amenity)
        : [...prev, amenity]
    );
  };

  const handleMarkerClick = (id: string) => {
    setActiveVenueId(id);
    const venue = venues.find(v => v.id === id);
    if (venue) {
      setSelectedVenue(venue);
      setIsPopupOpen(true);
    }
    
    const element = document.getElementById(`venue-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const handleCardHover = (id: string | null) => {
    setActiveVenueId(id);
  };

  const handleCardClick = (id: string) => {
    const venue = venues.find(v => v.id === id);
    if (venue) {
      setSelectedVenue(venue);
      setIsPopupOpen(true);
    }
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        onSearch={handleSearchSubmit} 
        onAmenityToggle={handleAmenityToggle}
        activeAmenities={activeAmenities}
      />
      
      <FilterBar 
        onFilterChange={handleFilterChange} 
        onCapacityChange={handleCapacityChange} 
      />
      
      <div className="container mx-auto px-4 py-2">
        {/* Move utility buttons below filters */}
        <div className="flex justify-end mb-4">
          <UtilityButtons 
            activeAmenities={activeAmenities} 
            onAmenityToggle={handleAmenityToggle}
          />
        </div>
      </div>
      
      <main className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center mb-4">
          <SearchResultsInfo />
        </div>
        
        <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-12'} gap-6`}>
          <div className={`${isMobile ? 'order-2' : 'col-span-7 order-1'}`}>
            <VenueList 
              activeVenueId={activeVenueId}
              onVenueHover={handleCardHover}
              onVenueClick={handleCardClick}
            />
          </div>
          
          <div className={`${isMobile ? 'order-1 h-[350px] mb-4' : 'col-span-5 order-2 sticky top-24 h-[calc(100vh-150px)]'}`}>
            <Map 
              venues={filteredVenues} 
              activeVenueId={activeVenueId}
              onMarkerClick={handleMarkerClick}
            />
          </div>
        </div>
      </main>

      <VenuePopup 
        venue={selectedVenue}
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
      />
    </div>
  );
};

const Index = () => {
  return (
    <SearchProvider>
      <IndexContent />
    </SearchProvider>
  );
};

export default Index;
