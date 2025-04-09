
import { Search, Wifi, Clock, Zap, MapPin, Flower2 } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";
import { venues } from "../data/venues";

interface HeaderProps {
  onSearch: (location: string) => void;
  onAmenityToggle: (amenity: string) => void;
  activeAmenities: string[];
}

const Header = ({ onSearch, onAmenityToggle, activeAmenities }: HeaderProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<{text: string, type: 'location' | 'venue'}[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const commonLocations = [
    "Los Angeles, CA", "New York, NY", "Chicago, IL", "San Francisco, CA", "Miami, FL",
    "Seattle, WA", "Austin, TX", "Portland, OR",
    "Paris, France", "London, UK", "Barcelona, Spain", "Berlin, Germany", 
    "Amsterdam, Netherlands", "Rome, Italy",
    "New Delhi, India", "Mumbai, India", "Bengaluru, India", "Kolkata, India", 
    "Chennai, India", "Hyderabad, India", "Jaipur, India", "Goa, India",
    "Islamabad, Pakistan", "Karachi, Pakistan", "Lahore, Pakistan", 
    "Faisalabad, Pakistan", "Peshawar, Pakistan", "Multan, Pakistan",
    "Beijing, China", "Shanghai, China", "Guangzhou, China", "Shenzhen, China",
    "Hong Kong, China", "Chengdu, China", "Xi'an, China", "Hangzhou, China",
    "Tokyo, Japan", "Kyoto, Japan", "Bangkok, Thailand", "Singapore",
    "Seoul, South Korea", "Dubai, UAE", "Istanbul, Turkey",
    "Sydney, Australia", "Melbourne, Australia", "Auckland, New Zealand",
    "Cairo, Egypt", "Cape Town, South Africa", "Marrakech, Morocco", 
    "Nairobi, Kenya", "Lagos, Nigeria",
    "Rio de Janeiro, Brazil", "Buenos Aires, Argentina", "Lima, Peru", 
    "Santiago, Chile", "Bogotá, Colombia",
    "Toronto, Canada", "Montreal, Canada", "Vancouver, Canada", 
    "Mexico City, Mexico", "Cancún, Mexico"
  ];

  useEffect(() => {
    // Only show suggestions when user has typed something
    if (searchTerm.trim() === "") {
      setSuggestions([]);
      return;
    }
    
    const term = searchTerm.toLowerCase();
    
    // Find exact matches first, then partial matches
    const exactLocationMatches = commonLocations
      .filter(loc => loc.toLowerCase() === term)
      .map(loc => ({ text: loc, type: 'location' as const }));
      
    const exactVenueMatches = venues
      .filter(venue => venue.name.toLowerCase() === term)
      .map(venue => ({ text: venue.name, type: 'venue' as const }));
    
    const partialLocationMatches = commonLocations
      .filter(loc => loc.toLowerCase().includes(term) && loc.toLowerCase() !== term)
      .map(loc => ({ text: loc, type: 'location' as const }));
      
    const partialVenueMatches = venues
      .filter(venue => venue.name.toLowerCase().includes(term) && venue.name.toLowerCase() !== term)
      .map(venue => ({ text: venue.name, type: 'venue' as const }));
    
    // Combine results with exact matches first
    const combinedResults = [
      ...exactVenueMatches,
      ...exactLocationMatches,
      ...partialVenueMatches.slice(0, 5),
      ...partialLocationMatches.slice(0, 10)
    ];
    
    setSuggestions(combinedResults);
  }, [searchTerm]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm) {
      onSearch(searchTerm);
    }
    setSearchOpen(false);
  };

  const selectSuggestion = (suggestion: string) => {
    setSearchTerm(suggestion);
    onSearch(suggestion);
    setSearchOpen(false);
    
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  // Helper to determine if an amenity is active
  const isAmenityActive = (amenity: string) => activeAmenities.includes(amenity);

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
        
        <div className="w-full md:w-auto md:flex-1 md:mx-8 max-w-2xl">
          <form onSubmit={handleSearch} className="flex items-center">
            <div className="relative flex-1">
              <Popover open={searchOpen && suggestions.length > 0} onOpenChange={setSearchOpen}>
                <PopoverTrigger asChild>
                  <Input
                    ref={inputRef}
                    type="text"
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      if (e.target.value.trim() !== "") {
                        setSearchOpen(true);
                      } else {
                        setSearchOpen(false);
                      }
                    }}
                    onClick={() => {
                      // Don't open suggestions when just clicked, need to type first
                      setSearchOpen(searchTerm.trim() !== "");
                    }}
                    className="w-full px-6 py-3 h-12 text-base rounded-l-full border-2 border-gray-300 focus:border-green-500"
                    placeholder="Search locations or venue names"
                  />
                </PopoverTrigger>
                <PopoverContent className="p-0 w-[300px] md:w-[400px]" align="start">
                  <div className="max-h-[400px] overflow-auto rounded-md shadow-md bg-white">
                    {suggestions.length === 0 ? (
                      <div className="p-4 text-center text-gray-500">No results found</div>
                    ) : (
                      <ul className="location-suggestion-list py-2">
                        {suggestions.map((suggestion, index) => (
                          <li 
                            key={`${suggestion.text}-${index}`}
                            onClick={() => selectSuggestion(suggestion.text)}
                            className="location-suggestion-item px-4 py-2 cursor-pointer hover:bg-gray-50 flex items-center"
                          >
                            {suggestion.type === 'location' ? (
                              <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                            ) : (
                              <Flower2 className="h-4 w-4 mr-2 text-green-500" />
                            )}
                            <span>{suggestion.text}</span>
                            <span className="ml-auto text-xs text-gray-400">
                              {suggestion.type === 'location' ? 'Location' : 'Venue'}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </PopoverContent>
              </Popover>
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
        </div>
        
        <div className="flex items-center space-x-2 mt-4 md:mt-0">
          <div className="hidden md:block ml-2">
            <a href="#" className="text-green-700 font-medium hover:underline">
              Become a Host
            </a>
          </div>
          
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
