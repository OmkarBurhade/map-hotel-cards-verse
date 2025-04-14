
import { useState, useEffect } from "react";
import Header from "../components/Header";
import FilterBar from "../components/FilterBar";
import EventFilterBar from "../components/EventFilterBar";
import Map from "../components/Map";
import VenuePopup from "../components/VenuePopup";
import EventPopup from "../components/EventPopup";
import UtilityButtons from "../components/UtilityButtons";
import VenueList from "../components/VenueList";
import EventList from "../components/EventList";
import SearchResultsInfo from "../components/SearchResultsInfo";
import { venues, VenueType } from "../data/venues";
import { events, EventType } from "../data/events";
import { useIsMobile } from "@/hooks/use-mobile";
import { useVenueFilter } from "@/hooks/use-venue-filter";
import { useEventFilter } from "@/hooks/use-event-filter";
import { SearchProvider, useSearch } from "@/contexts/SearchContext";

const IndexContent = () => {
  const [activeVenueId, setActiveVenueId] = useState<string | null>(null);
  const [activeEventId, setActiveEventId] = useState<string | null>(null);
  const [selectedVenue, setSelectedVenue] = useState<VenueType | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);
  const [isVenuePopupOpen, setIsVenuePopupOpen] = useState(false);
  const [isEventPopupOpen, setIsEventPopupOpen] = useState(false);
  const isMobile = useIsMobile();

  const {
    contentType,
    setSearchQuery,
    setActiveFilters,
    setCapacityRange,
    activeAmenities,
    setActiveAmenities,
    filteredVenues,
    filteredEvents,
    setActiveEventCategories,
    setEventPriceRange
  } = useSearch();

  const { handleSearch: handleVenueSearch } = useVenueFilter();
  const { handleSearch: handleEventSearch } = useEventFilter();

  const handleSearchSubmit = (query: string) => {
    setSearchQuery(query);
    
    if (contentType === "venues") {
      handleVenueSearch(query);

      const exactVenueMatch = venues.find(
        venue => venue.name.toLowerCase() === query.toLowerCase()
      );

      if (exactVenueMatch) {
        setSelectedVenue(exactVenueMatch);
        setActiveVenueId(exactVenueMatch.id);
        setIsVenuePopupOpen(true);
      }
    } else if (contentType === "events") {
      handleEventSearch(query);

      const exactEventMatch = events.find(
        event => event.name.toLowerCase() === query.toLowerCase()
      );

      if (exactEventMatch) {
        setSelectedEvent(exactEventMatch);
        setActiveEventId(exactEventMatch.id);
        setIsEventPopupOpen(true);
      }
    }
  };

  const handleFilterChange = (filters: string[]) => {
    setActiveFilters(filters);
  };

  const handleCapacityChange = (capacity: [number, number]) => {
    setCapacityRange(capacity);
  };

  const handleAmenityToggle = (amenity: string) => {
    const newAmenities = activeAmenities.includes(amenity)
      ? activeAmenities.filter(a => a !== amenity)
      : [...activeAmenities, amenity];

    setActiveAmenities(newAmenities);
  };

  const handleMarkerClick = (id: string) => {
    if (contentType === "venues") {
      setActiveVenueId(id);
      const venue = venues.find(v => v.id === id);
      if (venue) {
        setSelectedVenue(venue);
        setIsVenuePopupOpen(true);
      }

      const element = document.getElementById(`venue-${id}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    } else if (contentType === "events") {
      setActiveEventId(id);
      const event = events.find(e => e.id === id);
      if (event) {
        setSelectedEvent(event);
        setIsEventPopupOpen(true);
      }

      const element = document.getElementById(`event-${id}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };

  const handleCardHover = (id: string | null) => {
    if (contentType === "venues") {
      setActiveVenueId(id);
    } else if (contentType === "events") {
      setActiveEventId(id);
    }
  };

  const handleCardClick = (id: string) => {
    if (contentType === "venues") {
      const venue = venues.find(v => v.id === id);
      if (venue) {
        setSelectedVenue(venue);
        setIsVenuePopupOpen(true);
      }
    } else if (contentType === "events") {
      const event = events.find(e => e.id === id);
      if (event) {
        setSelectedEvent(event);
        setIsEventPopupOpen(true);
      }
    }
  };

  const handleCloseVenuePopup = () => {
    setIsVenuePopupOpen(false);
  };

  const handleCloseEventPopup = () => {
    setIsEventPopupOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        onSearch={handleSearchSubmit}
        onAmenityToggle={handleAmenityToggle}
        activeAmenities={activeAmenities}
      />

      {contentType === "venues" ? (
        <FilterBar
          onFilterChange={handleFilterChange}
          onCapacityChange={handleCapacityChange}
        />
      ) : contentType === "events" ? (
        <EventFilterBar />
      ) : null}

      <main className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center mb-4">
          <SearchResultsInfo />
        </div>

        <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-12'} gap-6`}>
          <div className={`${isMobile ? 'order-2' : 'col-span-7 order-1'}`}>
            {contentType === "venues" ? (
              <VenueList
                activeVenueId={activeVenueId}
                onVenueHover={handleCardHover}
                onVenueClick={handleCardClick}
              />
            ) : contentType === "events" ? (
              <EventList
                activeEventId={activeEventId}
                onEventHover={handleCardHover}
                onEventClick={handleCardClick}
              />
            ) : (
              <VenueList
                activeVenueId={activeVenueId}
                onVenueHover={handleCardHover}
                onVenueClick={handleCardClick}
              />
            )}
          </div>

          <div className={`${isMobile ? 'order-1 h-[350px] mb-4' : 'col-span-5 order-2 sticky top-28 h-[calc(100vh-150px)]'}`}>
            <Map
              venues={contentType === "venues" ? filteredVenues : filteredEvents}
              activeVenueId={contentType === "venues" ? activeVenueId : activeEventId}
              onMarkerClick={handleMarkerClick}
            />
          </div>
        </div>
      </main>

      <VenuePopup
        venue={selectedVenue}
        isOpen={isVenuePopupOpen}
        onClose={handleCloseVenuePopup}
      />

      <EventPopup
        event={selectedEvent}
        isOpen={isEventPopupOpen}
        onClose={handleCloseEventPopup}
      />
    </div>
  );
};

const Index = () => {
  return (
    <SearchProvider>
      <IndexContent />
    </SearchProvider>
  );
};

export default Index;
