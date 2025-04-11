
import { Clock, Heart } from "lucide-react";
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

  const handleHeartClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click when clicking the heart
    setIsFavorite(!isFavorite);
  };
  console.log(venue);

  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden transition-all cursor-pointer ${isActive ? "ring-2 ring-pink-500 transform scale-[1.02]" : "hover:shadow-lg"
        }`}
      onMouseEnter={() => onHover(venue.id)}
      onMouseLeave={() => onHover(null)}
      onClick={() => onClick(venue.id)} // Handle click to open popup
    >
      <div className="relative">
        <img
          src={venue.image}
          alt={venue.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
          Guest Favorite
        </div>
        <button
          className="absolute top-2 right-2 p-1 rounded-full"
          onClick={handleHeartClick}
        >
          <Heart
            className={`h-6 w-6 ${isFavorite ? "fill-red-500 text-red-500" : "text-white"}`}
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
          {venue.details.amenities.includes("wifi") && (
            <div className="p-1 bg-gray-100 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </div>
          )}

          {venue.details.amenities.includes("power") && (
            <div className="p-1 bg-gray-100 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
            </div>
          )}

          {venue.details.amenities.includes("pets") && (
            <div className="p-1 bg-gray-100 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436 1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.83z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M10 10a1 1 0 011 1c0 2.236-.46 4.368-1.29 6.304a1 1 0 01-1.838-.789A13.952 13.952 0 009 11a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
            </div>
          )}
          {venue.details.amenities.includes("clock") && (
            <div className="p-1 bg-gray-100 rounded-full text-gray-600">
              <Clock className="h-5 w-5" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VenueCard;
