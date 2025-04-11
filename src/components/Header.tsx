
import { useState } from "react";
import { useSearch } from "@/contexts/SearchContext";
import SearchAutocomplete from "./SearchAutocomplete";
import { Link } from "react-router-dom";

interface HeaderProps {
  onSearch: (location: string) => void;
  onAmenityToggle: (amenity: string) => void;
  activeAmenities: string[];
}

const Header = ({ onSearch, onAmenityToggle, activeAmenities }: HeaderProps) => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <Link to="/" className="flex items-center">
            <img src="https://www.healinggardens.co/_next/static/images/HGNewLogo-removebg-7798e84533bb03cb3285bc1887a3d7e3.png" alt="Logo" className="h-auto w-32 mr-2" />

          </Link>
        </div>

        <div className="w-full md:w-auto md:flex-1 md:mx-8 max-w-2xl">
          <SearchAutocomplete onSearch={onSearch} />
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
