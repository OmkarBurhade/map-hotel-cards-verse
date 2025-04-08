
import { Search } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  onSearch: (location: string) => void;
}

const Header = ({ onSearch }: HeaderProps) => {
  const [location, setLocation] = useState("Los Angeles, CA");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(location);
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
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Location"
              />
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
