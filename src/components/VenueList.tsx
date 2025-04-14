
import VenueCard from "./VenueCard";
import { VenueType } from "../data/venues";
import { useSearch } from "@/contexts/SearchContext";
import { Button } from "@/components/ui/button";

interface VenueListProps {
  activeVenueId: string | null;
  onVenueHover: (id: string | null) => void;
  onVenueClick: (id: string) => void;
}

const VenueList = ({ activeVenueId, onVenueHover, onVenueClick }: VenueListProps) => {
  const { filteredVenues, searchQuery, allVenues } = useSearch();

  if (filteredVenues.length === 0) {
    return (
      <div className="w-full">
        <div className="bg-white p-6 rounded-2xl shadow-md border border-blue-100 mb-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-medium">We are still growing in this location,</h3>
              <p className="text-gray-700">would you like to be notified when new gardens are added nearby?</p>
              <Button 
                className="bg-[#F5775E] hover:bg-[#e77159] text-white font-semibold rounded-full px-6 py-2"
              >
                Notify Me
              </Button>
            </div>
            <div className="w-[3px] h-28 mr-2 bg-gray-200"></div>
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Have a garden in this area?</h3>
              <p className="text-gray-700">We would love to have you in the Healing Gardens network.</p>
              <Button 
                className="bg-[#F5775E] hover:bg-[#e77159] text-white font-semibold rounded-full px-6 py-2"
              >
                Become a Host
              </Button>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-500 ml-1 mb-4">
          {searchQuery ? `No gardens found in ${searchQuery}.` : "No gardens found in this area."}
        </p>
        
        <h3 className="text-lg font-medium mb-4 mt-8 ml-1">All available gardens</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 gap-y-8">
          {allVenues.map((venue) => (
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
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 gap-y-8">
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
