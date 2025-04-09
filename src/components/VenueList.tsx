
import VenueCard from "./VenueCard";
import { VenueType } from "../data/venues";
import { useSearch } from "@/contexts/SearchContext";

interface VenueListProps {
  activeVenueId: string | null;
  onVenueHover: (id: string | null) => void;
  onVenueClick: (id: string) => void;
}

const VenueList = ({ activeVenueId, onVenueHover, onVenueClick }: VenueListProps) => {
  const { filteredVenues, searchQuery } = useSearch();

  if (filteredVenues.length === 0) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h3 className="text-xl font-medium mb-2">No Gardens Found</h3>
        <p className="text-gray-500">Try adjusting your search criteria or filters</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {filteredVenues.map((venue) => (
        <div id={`venue-${venue.id}`} key={venue.id}>
          <VenueCard 
            venue={venue} 
            isActive={venue.id === activeVenueId}
            onHover={onVenueHover} 
            onClick={onVenueClick}
          />
        </div>
      ))}
    </div>
  );
};

export default VenueList;
