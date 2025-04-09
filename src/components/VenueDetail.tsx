
import { useState, useEffect } from "react";
import VenuePopup from "./VenuePopup";
import { VenueType } from "../data/venues";
import { venues } from "../data/venues";

interface VenueDetailProps {
  activeVenueId: string | null;
}

const VenueDetail = ({ activeVenueId }: VenueDetailProps) => {
  const [selectedVenue, setSelectedVenue] = useState<VenueType | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    if (activeVenueId) {
      const venue = venues.find(v => v.id === activeVenueId);
      if (venue) {
        setSelectedVenue(venue);
      }
    }
  }, [activeVenueId]);

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  // Pass these methods up to the parent component in real usage
  const handleCardClick = (id: string) => {
    const venue = venues.find(v => v.id === id);
    if (venue) {
      setSelectedVenue(venue);
      setIsPopupOpen(true);
    }
  };

  return (
    <VenuePopup 
      venue={selectedVenue}
      isOpen={isPopupOpen}
      onClose={handleClosePopup}
    />
  );
};

export default VenueDetail;
