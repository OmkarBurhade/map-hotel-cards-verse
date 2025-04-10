
import { useState, useRef, useEffect } from "react";
import { MapPin, Flower2, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { venues } from "../data/venues";

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
  type: 'location' | 'venue';
};

const SearchAutocomplete = ({ onSearch }: SearchAutocompleteProps) => {
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

    // Find matches
    const exactVenueMatches = venues
      .filter(venue => venue.name.toLowerCase() === term)
      .map(venue => ({ text: venue.name, type: 'venue' as const }));

    const exactLocationMatches = commonLocations
      .filter(loc => loc.toLowerCase() === term)
      .map(loc => ({ text: loc, type: 'location' as const }));

    const partialVenueMatches = venues
      .filter(venue => venue.name.toLowerCase().includes(term) && venue.name.toLowerCase() !== term)
      .slice(0, 5)
      .map(venue => ({ text: venue.name, type: 'venue' as const }));

    const partialLocationMatches = commonLocations
      .filter(loc => loc.toLowerCase().includes(term) && loc.toLowerCase() !== term)
      .slice(0, 10)
      .map(loc => ({ text: loc, type: 'location' as const }));

    // Combine results with exact matches first
    const combinedResults = [
      ...exactVenueMatches,
      ...exactLocationMatches,
      ...partialVenueMatches,
      ...partialLocationMatches
    ].slice(0, 15);

    setSuggestions(combinedResults);
  }, [searchTerm, onSearch]);

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
          placeholder="Search locations or venue names"
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
                    ) : (
                      <Flower2 className="h-4 w-4 mr-2 text-green-500" />
                    )}
                    <span>{suggestion.text}</span>
                  </div>
                  <span className="ml-auto text-xs text-gray-400">
                    {suggestion.type === 'location' ? 'Location' : 'Venue'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      
      <div className="relative">
        <select className="h-12 px-4 py-2 border-2 border-y-gray-300 border-r-0 border-l-0 appearance-none focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-base">
          <option>Venue Rentals</option>
          <option>Gardens</option>
          <option>Parks</option>
        </select>
      </div>
      
      <button type="submit" className="bg-green-600 text-white px-5 py-3 h-12 rounded-r-full hover:bg-green-700 transition-colors">
        <Search className="h-5 w-5" />
      </button>
    </form>
  );
};

export default SearchAutocomplete;
