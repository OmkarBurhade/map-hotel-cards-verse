import { Search, Wifi, Clock, Zap, MapPin, Hotel, Flower2 } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";
import { venues } from "../data/venues";

interface HeaderProps {
  onSearch: (location: string) => void;
}

const Header = ({ onSearch }: HeaderProps) => {
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
    if (searchTerm.trim() === "") {
      if (searchOpen) {
        const locationSuggestions = commonLocations.slice(0, 8).map(loc => ({
          text: loc,
          type: 'location' as const
        }));
        
        const venueSuggestions = venues.slice(0, 4).map(venue => ({
          text: venue.name,
          type: 'venue' as const
        }));
        
        setSuggestions([...locationSuggestions, ...venueSuggestions]);
      } else {
        setSuggestions([]);
      }
      return;
    }
    
    const term = searchTerm.toLowerCase();
    
    const filteredLocations = commonLocations
      .filter(loc => loc.toLowerCase().includes(term))
      .map(loc => ({ text: loc, type: 'location' as const }));
      
    const filteredVenues = venues
      .filter(venue => venue.name.toLowerCase().includes(term))
      .map(venue => ({ text: venue.name, type: 'venue' as const }));
    
    const combinedResults = [...filteredVenues.slice(0, 5), ...filteredLocations.slice(0, 10)];
    setSuggestions(combinedResults);
    
    const exactLocationMatch = commonLocations.find(
      loc => loc.toLowerCase() === term
    );
    
    if (exactLocationMatch) {
      onSearch(exactLocationMatch);
    } else {
      onSearch(searchTerm);
    }
  }, [searchTerm, searchOpen, onSearch]);

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
                  <Input
                    ref={inputRef}
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 rounded-l-full"
                    placeholder="Search locations or venue names"
                    onFocus={() => setSearchOpen(true)}
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
        
        <div className="flex items-center space-x-2 mt-4 md:mt-0">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="utility-button p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors">
                  <Wifi className="h-5 w-5 text-gray-700" />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Filter venues with WiFi</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="utility-button p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors">
                  <Clock className="h-5 w-5 text-gray-700" />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Filter by availability time</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="utility-button p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors">
                  <Zap className="h-5 w-5 text-gray-700" />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Filter venues with power outlets</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="utility-button p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors">
                  <Flower2 className="h-5 w-5 text-gray-700" />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Filter venues with gardens</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

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
