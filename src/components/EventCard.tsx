
import { Calendar, Clock, Heart, MapPin, Ticket } from "lucide-react";
import { useState } from "react";
import { EventType } from "../data/events";
import { Card } from "./ui/card";

interface EventCardProps {
  event: EventType;
  isActive: boolean;
  onHover: (id: string | null) => void;
  onClick: (id: string) => void;
}

const EventCard = ({ event, isActive, onHover, onClick }: EventCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleHeartClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click when clicking the heart
    setIsFavorite(!isFavorite);
  };

  return (
    <div
      className={`transition-all cursor-pointer`}
      onMouseEnter={() => onHover(event.id)}
      onMouseLeave={() => onHover(null)}
      onClick={() => onClick(event.id)}
    >
      <div className="relative">
        <img
          src={event.image}
          alt={event.name}
          className={`w-full h-60 object-cover rounded-2xl transition-all ${isActive ? "transform scale-[1.02]" : "hover:shadow-lg"}`}
        />
        {event.isSelling && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
            Selling Fast!
          </div>
        )}

        <button
          className="absolute top-2 right-2 p-1 rounded-full"
          onClick={handleHeartClick}
        >
          <Heart
            className={`h-6 w-6 ${isFavorite ? "fill-red-500 text-red-500" : "text-white fill-[#00000043]"}`}
          />
        </button>
      </div>

      <div className="p-4">
        <h3 className="font-bold text-lg">{event.name}</h3>
        
        <div className="flex items-center gap-1 text-sm text-gray-600 mt-2">
          <Calendar className="h-4 w-4 text-pink-500" />
          <span>{event.date} at {event.time}</span>
        </div>
        
        <div className="flex items-center gap-1 text-sm text-gray-600 mt-2">
          <MapPin className="h-4 w-4 text-pink-500" />
          <span>
            {event.location.venue}, {event.location.city} {event.location.state} ({event.location.distance})
          </span>
        </div>

        <div className="flex items-center gap-1 text-sm text-gray-600 mt-2">
          <Ticket className="h-4 w-4 text-pink-500" />
          <span>Tickets from ${event.details.price}</span>
        </div>

        <div className="flex gap-2 mt-4">
          {event.details.amenities.includes("family-friendly") && (
            <div className="p-1 bg-gray-100 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
          )}
          {event.details.amenities.includes("pets-allowed") && (
            <div className="p-1 bg-gray-100 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
              </svg>
            </div>
          )}
          {event.details.amenities.includes("wheelchair-accessible") && (
            <div className="p-1 bg-gray-100 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
