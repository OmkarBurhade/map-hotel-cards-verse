
import { Clock, Flower2, Heart, PawPrint, Wifi, WifiHigh, Zap } from "lucide-react";
import { useState } from "react";
import { VenueType } from "../data/venues";
import { Card } from "./ui/card";

interface VenueCardProps {
  venue: VenueType;
  isActive: boolean;
  onHover: (id: string | null) => void;
  onClick: (id: string) => void; // New prop for handling clicks
}

const VenueCard = ({ venue, isActive, onHover, onClick }: VenueCardProps) => {
  const [isFavorite, setIsFavorite] = useState(venue.isFavorite);
  const [guestFavorite, setGuestFavorite] = useState(venue.guestFavorite);


  const handleHeartClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click when clicking the heart
    setIsFavorite(!isFavorite);
  };


  return (
    <div
      className={` transition-all cursor-pointer `}
      onMouseEnter={() => onHover(venue.id)}
      onMouseLeave={() => onHover(null)}
      onClick={() => onClick(venue.id)} // Handle click to open popup
    >
      <div className="relative">
        <img
          src={venue.image}
          alt={venue.name}
          className={`w-full h-60 object-cover rounded-2xl transition-all ${isActive ? "transform scale-[1.02]" : "hover:shadow-lg"
            }`}
        />
        {guestFavorite && <div className="absolute top-2 left-2 bg-white text-black px-3 py-[.5rem] rounded-full text-xs">
          Guest Favorite
        </div>}

        <button
          className="absolute top-2 right-2 p-1 rounded-full"
          onClick={handleHeartClick}
        >
          <Heart
            className={`h-6 w-6  ${isFavorite ? "fill-red-500 text-red-500" : "text-white fill-[#00000043]"}`}
          />
        </button>
      </div>

      <div className="p-4">
        <h3 className="font-bold text-lg">{venue.name}</h3>
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {venue.location.city} {venue.location.distance}
        </div>

        <div className="text-sm mb-2">
          {venue.details.privateExperiences} Private Experiences & {venue.details.events} events
        </div>

        <div className="flex items-center mb-4">
          <div className="flex items-center text-sm">
            {venue.details.reviews} reviews
          </div>
          <div className="mx-2">|</div>
          <div className="flex items-center">
            {[...Array(venue.details.rating)].map((_, i) => (
              <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="text-sm font-medium">
            {venue.details.squareFeet} sq ft
          </div>

          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">{venue.details.capacity}</span>
          </div>
        </div>

        <div className="mt-3 flex gap-2">
          {venue.details.amenities?.includes("wifi") && (
            <div className="p-2 bg-gray-100 rounded-full">
              <Wifi className="text-gray-600 h-4 w-4" />
            </div>
          )}

          {venue.details.amenities?.includes("power") && (
            <div className="p-2 bg-gray-100 rounded-full">
              <Zap className="text-gray-600 h-4 w-4" />
            </div>
          )}

          {venue.details.amenities?.includes("pets") && (
            <div className="p-2 bg-gray-100 rounded-full">
              <PawPrint className="text-gray-600 h-4 w-4" />
            </div>
          )}
          {venue.details.amenities?.includes("gardens") && (
            <div className="p-2 bg-gray-100 rounded-full">
              <Flower2 className="text-gray-600 h-4 w-4" />
            </div>
          )}
          {venue.details.amenities?.includes("clock") && (
            <div className="p-2 bg-gray-100 rounded-full text-gray-600">
              <Clock className="h-4 w-4" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VenueCard;
