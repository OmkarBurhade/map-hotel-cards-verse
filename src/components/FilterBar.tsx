
import { useState } from "react";
import { venueTypes } from "../data/venues";

interface FilterBarProps {
  onFilterChange: (filters: string[]) => void;
}

const FilterBar = ({ onFilterChange }: FilterBarProps) => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [capacity, setCapacity] = useState<string>("Any");

  const toggleFilter = (filter: string) => {
    const isActive = activeFilters.includes(filter);
    
    let newFilters: string[];
    if (filter === "All Filters") {
      newFilters = isActive ? [] : venueTypes.filter(type => type !== "All Filters");
    } else {
      newFilters = isActive 
        ? activeFilters.filter(f => f !== filter)
        : [...activeFilters, filter];
    }
    
    setActiveFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="bg-white py-4 border-b">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center gap-2">
          <div className="relative mr-2">
            <select
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
              className="bg-orange-100 text-orange-800 px-4 py-2 pr-8 rounded-full appearance-none cursor-pointer"
            >
              <option>Any</option>
              <option>1-10</option>
              <option>11-50</option>
              <option>51-100</option>
              <option>100+</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-orange-800">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
              </svg>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 no-scrollbar">
            {venueTypes.map((filter) => (
              <button
                key={filter}
                onClick={() => toggleFilter(filter)}
                className={`px-3 py-1 rounded-full text-sm whitespace-nowrap flex items-center gap-1 transition-colors ${
                  activeFilters.includes(filter)
                    ? "bg-green-600 text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                {filter === "All Filters" && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                )}
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-2">
          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
            </svg>
          </button>
          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </button>
          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
