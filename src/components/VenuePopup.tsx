
import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { VenueType } from "@/data/venues";
import { MapPin, Clock, Users, WifiIcon, Zap, Heart, X, Coffee, Calendar } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

interface VenuePopupProps {
  venue: VenueType | null;
  isOpen: boolean;
  onClose: () => void;
}

const VenuePopup = ({ venue, isOpen, onClose }: VenuePopupProps) => {
  const [isFavorite, setIsFavorite] = useState(venue?.isFavorite || false);

  if (!venue) return null;

  const handleBookNow = () => {
    // This would typically redirect to a booking page
    toast({
      title: "Booking initiated",
      description: `You're being redirected to book ${venue.name}`,
    });
    
    // For demo purposes, we'll just show a toast
    // In a real app, this would be a redirect:
    // window.location.href = `/book/${venue.id}`;
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    toast({
      title: isFavorite ? "Removed from favorites" : "Added to favorites",
      description: isFavorite ? 
        `${venue.name} has been removed from your favorites` : 
        `${venue.name} has been added to your favorites`,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center justify-between">
            <span>{venue.name}</span>
            <button 
              onClick={toggleFavorite}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
            >
              <Heart 
                className={`h-5 w-5 ${isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"}`}
              />
            </button>
          </DialogTitle>
          <DialogDescription className="flex items-center gap-1">
            <MapPin className="h-4 w-4 text-pink-500" />
            <span>{venue.location.address}, {venue.location.city} ({venue.location.distance})</span>
          </DialogDescription>
        </DialogHeader>
        
        <div className="relative h-56 w-full mb-4">
          <img 
            src={venue.image} 
            alt={venue.name} 
            className="w-full h-full object-cover rounded-md"
          />
          <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
            Guest Favorite
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-gray-600" />
            <span>Capacity: {venue.details.capacity} people</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-gray-600" />
            <span>{venue.details.events} events hosted</span>
          </div>
          <div className="flex items-center gap-2">
            <Coffee className="h-5 w-5 text-gray-600" />
            <span>{venue.details.privateExperiences} private experiences</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-gray-600" />
            <span>{venue.details.reviews} reviews</span>
          </div>
        </div>

        <div className="flex gap-2 mb-4">
          {venue.tags.map((tag, index) => (
            <span 
              key={index} 
              className="bg-gray-100 px-2 py-1 rounded-full text-xs text-gray-800"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mb-4">
          {venue.details.amenities.includes("wifi") && (
            <div className="flex flex-col items-center justify-center">
              <div className="p-2 bg-pink-100 rounded-full">
                <WifiIcon className="h-5 w-5 text-pink-600" />
              </div>
              <span className="text-xs mt-1">WiFi</span>
            </div>
          )}
          
          {venue.details.amenities.includes("power") && (
            <div className="flex flex-col items-center justify-center">
              <div className="p-2 bg-pink-100 rounded-full">
                <Zap className="h-5 w-5 text-pink-600" />
              </div>
              <span className="text-xs mt-1">Power</span>
            </div>
          )}
          
          {venue.details.amenities.includes("pets") && (
            <div className="flex flex-col items-center justify-center">
              <div className="p-2 bg-pink-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436 1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.83z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M10 10a1 1 0 011 1c0 2.236-.46 4.368-1.29 6.304a1 1 0 01-1.838-.789A13.952 13.952 0 009 11a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-xs mt-1">Pet Friendly</span>
            </div>
          )}
        </div>

        <div className="text-sm text-gray-600 mb-4">
          <p>
            {venue.name} is a beautiful garden venue perfect for {venue.tags.join(", ")} events. 
            With {venue.details.squareFeet} square feet of space and a capacity of {venue.details.capacity} people,
            it's an ideal location for your next gathering.
          </p>
        </div>
        
        <DialogFooter>
          <Button
            className="w-full"
            onClick={handleBookNow}
          >
            Book This Venue
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default VenuePopup;
