
import EventCard from "./EventCard";
import { useSearch } from "@/contexts/SearchContext";
import { Button } from "@/components/ui/button";

interface EventListProps {
  activeEventId: string | null;
  onEventHover: (id: string | null) => void;
  onEventClick: (id: string) => void;
}

const EventList = ({ activeEventId, onEventHover, onEventClick }: EventListProps) => {
  const { filteredEvents, searchQuery, allEvents } = useSearch();

  if (filteredEvents.length === 0) {
    return (
      <div className="w-full">
        <div className="bg-white p-6 rounded-2xl shadow-md border border-blue-100 mb-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-medium">We're still growing in this location,</h3>
              <p className="text-gray-700">would you like to be notified when new events are added nearby?</p>
              <Button 
                className="bg-[#F5775E] hover:bg-[#e77159] text-white font-semibold rounded-full px-6 py-2"
              >
                Notify Me
              </Button>
            </div>
            <div className="w-[3px] h-28 mr-2 bg-gray-200"></div>
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Want to host an event in this area?</h3>
              <p className="text-gray-700">We would love to have your event in the Healing Gardens network.</p>
              <Button 
                className="bg-[#F5775E] hover:bg-[#e77159] text-white font-semibold rounded-full px-6 py-2"
              >
                Become a Host
              </Button>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-500 ml-1 mb-4">
          {searchQuery ? `No events found in ${searchQuery}.` : "No events found in this area."}
        </p>
        
        <h3 className="text-lg font-medium mb-4 mt-8 ml-1">All upcoming events</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {allEvents.map((event) => (
            <div id={`event-${event.id}`} key={event.id}>
              <EventCard 
                event={event} 
                isActive={event.id === activeEventId}
                onHover={onEventHover} 
                onClick={onEventClick}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {filteredEvents.map((event) => (
        <div id={`event-${event.id}`} key={event.id}>
          <EventCard 
            event={event} 
            isActive={event.id === activeEventId}
            onHover={onEventHover} 
            onClick={onEventClick}
          />
        </div>
      ))}
    </div>
  );
};

export default EventList;
