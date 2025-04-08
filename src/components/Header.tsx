
import { Search } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface HeaderProps {
  onSearch: (location: string) => void;
}

const Header = ({ onSearch }: HeaderProps) => {
  const [location, setLocation] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [debouncedLocation, setDebouncedLocation] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  
  // International locations
  const commonLocations = [
    // United States
    "Los Angeles, CA", 
    "New York, NY", 
    "Chicago, IL", 
    "San Francisco, CA", 
    "Miami, FL",
    "Seattle, WA",
    "Austin, TX",
    "Portland, OR",
    // International
    "Paris, France",
    "Tokyo, Japan",
    "London, UK",
    "Barcelona, Spain",
    "Sydney, Australia",
    "Berlin, Germany",
    "Amsterdam, Netherlands",
    "Rome, Italy",
    "Bangkok, Thailand",
    "Rio de Janeiro, Brazil",
    "Cape Town, South Africa",
    "Dubai, UAE",
    "Toronto, Canada",
    "Mexico City, Mexico",
    "Kyoto, Japan",
    "Singapore"
  ];

  // Debounce search input to prevent too many updates
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedLocation(location);
      if (location) {
        onSearch(location);
      }
    }, 300);
    
    return () => clearTimeout(timer);
  }, [location, onSearch]);
  
  // Update suggestions when location changes
  useEffect(() => {
    if (location) {
      const filtered = commonLocations.filter(loc => 
        loc.toLowerCase().includes(location.toLowerCase())
      );
      setSuggestions(filtered);
    } else if (searchOpen) {
      // Show all common locations when input is empty but focused
      setSuggestions(commonLocations);
    } else {
      setSuggestions([]);
    }
  }, [location, searchOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (location) {
      onSearch(location);
    }
    setSearchOpen(false);
  };

  const handleLocationChange = (value: string) => {
    setLocation(value);
  };

  const selectSuggestion = (suggestion: string) => {
    setLocation(suggestion);
    onSearch(suggestion);
    setSearchOpen(false);
    
    // Remove focus from the input
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <a href="/" className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-yellow-400 rounded-full flex items-center justify-center mr-2">
              <span className="text-white text-lg font-bold">HG</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-green-700">HEALING <span className="text-yellow-500">GARDENS</span></h1>
            </div>
          </a>
        </div>
        
        <div className="w-full md:w-auto md:flex-1 md:mx-8">
          <form onSubmit={handleSearch} className="flex items-center">
            <div className="relative flex-1">
              <Popover open={searchOpen} onOpenChange={setSearchOpen}>
                <PopoverTrigger asChild>
                  <input
                    ref={inputRef}
                    type="text"
                    value={location}
                    onChange={(e) => handleLocationChange(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Search for a location"
                    onFocus={() => setSearchOpen(true)}
                  />
                </PopoverTrigger>
                <PopoverContent className="p-0 w-[300px] md:w-[400px]" align="start">
                  <div className="max-h-[400px] overflow-auto rounded-md shadow-md bg-white">
                    {suggestions.length === 0 ? (
                      <div className="p-4 text-center text-gray-500">No locations found</div>
                    ) : (
                      <ul className="location-suggestion-list py-2">
                        {suggestions.map((suggestion) => (
                          <li 
                            key={suggestion}
                            onClick={() => selectSuggestion(suggestion)}
                            className="location-suggestion-item px-4 py-2 cursor-pointer hover:bg-gray-50 flex items-center"
                          >
                            <Search className="h-4 w-4 mr-2 text-gray-400" />
                            <span>{suggestion}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </PopoverContent>
              </Popover>
            </div>
            <div className="relative">
              <select className="h-full px-4 py-2 border-t border-b border-gray-300 appearance-none focus:outline-none focus:ring-2 focus:ring-green-500 bg-white">
                <option>Venue Rentals</option>
                <option>Gardens</option>
                <option>Parks</option>
              </select>
            </div>
            <button type="submit" className="bg-green-600 text-white p-2 rounded-r-full hover:bg-green-700 transition-colors">
              <Search className="h-5 w-5" />
            </button>
          </form>
        </div>
        
        <div className="flex items-center mt-4 md:mt-0">
          <a href="#" className="text-green-700 font-medium mr-4 hover:underline">
            Become a Host
          </a>
          <button className="bg-white border border-gray-300 p-2 rounded-full hover:bg-gray-50 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zm-4 7a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
