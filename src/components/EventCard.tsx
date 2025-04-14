
import { Accessibility, Calendar, Heart, PawPrint, Ticket, Users } from "lucide-react";
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
      className={`transition-all cursor-pointer w-64`}
      onMouseEnter={() => onHover(event.id)}
      onMouseLeave={() => onHover(null)}
      onClick={() => onClick(event.id)}
    >
      <div className="relative">
        <img
          src={event.image}
          alt={event.name}
          className={`w-full h-52 object-cover rounded-2xl transition-all ${isActive ? "transform scale-[1.02]" : "hover:shadow-lg"}`}
        />
        {event.isSelling && (
          <div className="absolute top-2 left-2 bg-[#ffdf8fdd] text-zinc-800 px-3 py-1 rounded-full text-xs font-medium">
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

      <div className="py-4 px-2">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-base leading-5">{event.name}</h3>
            <div className="flex items-start gap-1 text-sm text-gray-600 mt-1">
              <Calendar className="h-4 w-4 text-pink-500 mr-1" />
              <span>{event.date} at {event.time}</span>
            </div>
          </div>
          <div className="bg-[#DC5584] w-10 h-10 flex items-center justify-center rounded-full rotate-45">
            <Ticket color="white" />
          </div>
        </div>

        <div className="flex items-start gap-1 text-sm text-gray-600 mt-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="leading-5">
            {event.location.venue}, {event.location.city} {event.location.state} ({event.location.distance})
          </span>
        </div>

        <div className="flex items-center gap-1 text-sm leading-5 text-gray-600 mt-1 ">
          <Ticket className="h-4 w-4 text-pink-500 mr-1" />
          <p>Tickets from <span className="font-semibold text-gray-800">${event.details.price}</span></p>
        </div>

        <div className="flex gap-2 mt-4">
          {event.details.amenities.includes("family-friendly") && (
            <div className="p-2 bg-gray-200 rounded-full">
              <Users className="w-4 h-4 text-gray-600" />
            </div>
          )}
          {event.details.amenities.includes("pets-allowed") && (
            <div className="p-2 bg-gray-200 rounded-full">
              <PawPrint className="w-4 h-4 text-gray-600" />
            </div>
          )}
          {event.details.amenities.includes("wheelchair-accessible") && (
            <div className="p-2 bg-gray-200 rounded-full">
              <Accessibility className="w-4 h-4 text-gray-600" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
