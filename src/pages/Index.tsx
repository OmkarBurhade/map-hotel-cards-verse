
import { useState, useEffect } from "react";
import Header from "../components/Header";
import FilterBar from "../components/FilterBar";
import VenueCard from "../components/VenueCard";
import Map from "../components/Map";
import VenuePopup from "../components/VenuePopup";
import { venues, VenueType } from "../data/venues";
import { useIsMobile } from "@/hooks/use-mobile";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [filteredVenues, setFilteredVenues] = useState<VenueType[]>(venues);
  const [activeVenueId, setActiveVenueId] = useState<string | null>(null);
  const [selectedVenue, setSelectedVenue] = useState<VenueType | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [searchLocation, setSearchLocation] = useState("");
  const [capacityRange, setCapacityRange] = useState<[number, number]>([0, 200]);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Apply all active filters
    let filtered = venues;
    
    // Apply location filter if search location is provided
    if (searchLocation) {
      filtered = filtered.filter(venue => 
        venue.location.city.toLowerCase().includes(searchLocation.toLowerCase())
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
    
    setFilteredVenues(filtered);
  }, [activeFilters, capacityRange, searchLocation]);

  const handleSearch = (location: string) => {
    setSearchLocation(location);
    toast({
      title: "Location updated",
      description: `Searching for venues in ${location}`,
    });
  };

  const handleFilterChange = (filters: string[]) => {
    setActiveFilters(filters);
  };

  const handleCapacityChange = (capacity: [number, number]) => {
    setCapacityRange(capacity);
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
      <Header onSearch={handleSearch} />
      <FilterBar 
        onFilterChange={handleFilterChange} 
        onCapacityChange={handleCapacityChange} 
      />
      
      <main className="container mx-auto px-4 py-6">
        <div className="text-lg font-medium mb-4">
          {filteredVenues.length} gardens {searchLocation ? `in ${searchLocation}` : 'worldwide'}
        </div>
        
        <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-12'} gap-6`}>
          <div className={`${isMobile ? 'order-2' : 'col-span-7 order-1'}`}>
            {filteredVenues.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredVenues.map((venue) => (
                  <div id={`venue-${venue.id}`} key={venue.id}>
                    <VenueCard 
                      venue={venue} 
                      isActive={venue.id === activeVenueId}
                      onHover={handleCardHover} 
                      onClick={handleCardClick}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-medium mb-2">No Venues Found</h3>
                <p className="text-gray-500">Try adjusting your search criteria or filters</p>
              </div>
            )}
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

export default Index;
