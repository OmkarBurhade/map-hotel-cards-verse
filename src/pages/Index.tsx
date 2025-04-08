
import { useState, useEffect } from "react";
import Header from "../components/Header";
import FilterBar from "../components/FilterBar";
import VenueCard from "../components/VenueCard";
import Map from "../components/Map";
import { venues, VenueType } from "../data/venues";
import { useIsMobile } from "@/hooks/use-mobile";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [filteredVenues, setFilteredVenues] = useState<VenueType[]>(venues);
  const [activeVenueId, setActiveVenueId] = useState<string | null>(null);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [searchLocation, setSearchLocation] = useState("Los Angeles, CA");
  const [capacityRange, setCapacityRange] = useState<[number, number]>([0, 200]);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Filter venues based on active filters and capacity range
    let filtered = venues;
    
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
  }, [activeFilters, capacityRange]);

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
    const element = document.getElementById(`venue-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const handleCardHover = (id: string | null) => {
    setActiveVenueId(id);
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
          {filteredVenues.length} gardens in {searchLocation}
        </div>
        
        <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-12'} gap-6`}>
          <div className={`${isMobile ? 'order-2' : 'col-span-7 order-1'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredVenues.map((venue) => (
                <div id={`venue-${venue.id}`} key={venue.id}>
                  <VenueCard 
                    venue={venue} 
                    isActive={venue.id === activeVenueId}
                    onHover={handleCardHover} 
                  />
                </div>
              ))}
            </div>
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
    </div>
  );
};

export default Index;
