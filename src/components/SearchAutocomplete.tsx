
import { useState, useRef, useEffect } from "react";
import { MapPin, Flower2, Search, Ticket } from "lucide-react";
import { Input } from "@/components/ui/input";
import { venues } from "../data/venues";
import { events } from "../data/events";
import { useSearch } from "@/contexts/SearchContext";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

interface SearchAutocompleteProps {
  onSearch: (query: string) => void;
}

const commonLocations = [
  "Los Angeles, CA", "New York, NY", "Chicago, IL", "San Francisco, CA", "Miami, FL",
  "Seattle, WA", "Austin, TX", "Portland, OR",
  "Paris, France", "London, UK", "Barcelona, Spain", "Berlin, Germany",
  // Shortened list for clarity
];

type SuggestionType = {
  text: string;
  type: 'location' | 'venue' | 'event';
};

const SearchAutocomplete = ({ onSearch }: SearchAutocompleteProps) => {
  const { contentType, setContentType } = useSearch();
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<SuggestionType[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSuggestions([]);
      // If search term is empty, trigger onSearch with empty string
      // to reset the search and show all cards
      onSearch("");
      return;
    }

    const term = searchTerm.toLowerCase();

    let exactVenueMatches: SuggestionType[] = [];
    let partialVenueMatches: SuggestionType[] = [];
    let exactEventMatches: SuggestionType[] = [];
    let partialEventMatches: SuggestionType[] = [];

    if (contentType === "venues" || contentType === "experiences") {
      // Find venue matches
      exactVenueMatches = venues
        .filter(venue => venue.name.toLowerCase() === term)
        .map(venue => ({ text: venue.name, type: 'venue' as const }));
      
      partialVenueMatches = venues
        .filter(venue => venue.name.toLowerCase().includes(term) && venue.name.toLowerCase() !== term)
        .map(venue => ({ text: venue.name, type: 'venue' as const }));
    }

    if (contentType === "events") {
      // Find event matches
      exactEventMatches = events
        .filter(event => event.name.toLowerCase() === term)
        .map(event => ({ text: event.name, type: 'event' as const }));
      
      partialEventMatches = events
        .filter(event => event.name.toLowerCase().includes(term) && event.name.toLowerCase() !== term)
        .map(event => ({ text: event.name, type: 'event' as const }));
    }

    // Location matches for all content types
    const exactLocationMatches = commonLocations
      .filter(loc => loc.toLowerCase() === term)
      .map(loc => ({ text: loc, type: 'location' as const }));

    const partialLocationMatches = commonLocations
      .filter(loc => loc.toLowerCase().includes(term) && loc.toLowerCase() !== term)
      .map(loc => ({ text: loc, type: 'location' as const }));

    // Combine results with exact matches first
    const combinedResults = [
      ...exactVenueMatches,
      ...exactEventMatches,
      ...exactLocationMatches,
      ...partialVenueMatches,
      ...partialEventMatches,
      ...partialLocationMatches
    ];

    setSuggestions(combinedResults);
  }, [searchTerm, onSearch, contentType]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
    setShowSuggestions(false);
  };

  const selectSuggestion = (suggestion: string) => {
    setSearchTerm(suggestion);
    onSearch(suggestion);
    setShowSuggestions(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    // Show suggestions only if there's text
    setShowSuggestions(value.trim() !== "");
  };

  const handleContentTypeChange = (value: string) => {
    setContentType(value as "venues" | "events" | "experiences");
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center relative w-full">
      <div className="relative flex-1">
        <Input
          ref={inputRef}
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          onClick={() => {
            setShowSuggestions(searchTerm.trim() !== "");
          }}
          className="w-full px-6 py-3 h-12 text-base rounded-l-full border-2 border-gray-300 focus:border-green-500"
          placeholder={`Search locations or ${contentType === "events" ? "event" : "venue"} names`}
          autoComplete="off"
        />

        {/* Suggestions dropdown */}
        {showSuggestions && suggestions.length > 0 && (
          <div
            ref={suggestionsRef}
            className="absolute left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto"
          >
            <div className="p-1">
              {suggestions.map((suggestion, index) => (
                <div
                  key={`${suggestion.text}-${index}`}
                  onClick={() => selectSuggestion(suggestion.text)}
                  className="flex items-center justify-between p-2 hover:bg-gray-100 rounded cursor-pointer"
                >
                  <div className="flex items-center">
                    {suggestion.type === 'location' ? (
                      <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                    ) : suggestion.type === 'event' ? (
                      <Ticket className="h-4 w-4 mr-2 text-pink-500" />
                    ) : (
                      <Flower2 className="h-4 w-4 mr-2 text-green-500" />
                    )}
                    <span>{suggestion.text}</span>
                  </div>
                  <span className="ml-auto text-xs text-gray-400">
                    {suggestion.type === 'location' ? 'Location' : suggestion.type === 'event' ? 'Event' : 'Venue'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="relative">
        <Select 
          value={contentType} 
          onValueChange={handleContentTypeChange}
        >
          <SelectTrigger className="h-12 px-4 py-2 border-2 border-gray-300 border-x-0 w-[160px] appearance-none focus:outline-none bg-white text-base">
            <SelectValue placeholder="Venue Rentals" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="venues">Venue Rentals</SelectItem>
            <SelectItem value="events">Ticketed Events</SelectItem>
            <SelectItem value="experiences">Private Experiences</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <button type="submit" className="bg-green-600 text-white px-5 py-3 h-12 rounded-r-full hover:bg-green-700 transition-colors">
        <Search className="h-5 w-5" />
      </button>
    </form>
  );
};

export default SearchAutocomplete;
