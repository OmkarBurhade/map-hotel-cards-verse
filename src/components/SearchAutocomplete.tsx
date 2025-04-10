
import { useState, useRef, useEffect } from "react";
import { MapPin, Flower2, Search } from "lucide-react";
import { 
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { venues } from "../data/venues";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
  const [open, setOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<SuggestionType[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSuggestions([]);
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
  }, [searchTerm]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm) {
      onSearch(searchTerm);
      setOpen(false);
    }
  };

  const selectSuggestion = (suggestion: string) => {
    setSearchTerm(suggestion);
    onSearch(suggestion);
    setOpen(false);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center relative w-full">
      <Popover open={open && suggestions.length > 0} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div className="relative flex-1">
            <Input
              ref={inputRef}
              type="text"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                if (e.target.value.trim() !== "") {
                  setOpen(true);
                } else {
                  setOpen(false);
                }
              }}
              onClick={() => {
                setOpen(searchTerm.trim() !== "");
              }}
              className="w-full px-6 py-3 h-12 text-base rounded-l-full border-2 border-gray-300 focus:border-green-500"
              placeholder="Search locations or venue names"
            />
          </div>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-[300px] md:w-[400px]" align="start">
          <Command>
            <CommandList>
              <CommandEmpty>No results found</CommandEmpty>
              <CommandGroup>
                {suggestions.map((suggestion, index) => (
                  <CommandItem
                    key={`${suggestion.text}-${index}`}
                    onSelect={() => selectSuggestion(suggestion.text)}
                    className="flex items-center justify-between"
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
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      
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
