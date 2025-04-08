
import { useState } from "react";
import { venueTypes } from "../data/venues";
import { Slider } from "@/components/ui/slider";

interface FilterBarProps {
  onFilterChange: (filters: string[]) => void;
  onCapacityChange?: (capacity: [number, number]) => void;
}

const FilterBar = ({ onFilterChange, onCapacityChange }: FilterBarProps) => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [capacity, setCapacity] = useState<[number, number]>([0, 200]);

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

  const handleCapacityChange = (values: number[]) => {
    const capacityRange: [number, number] = [values[0], values[1]];
    setCapacity(capacityRange);
    if (onCapacityChange) {
      onCapacityChange(capacityRange);
    }
  };

  return (
    <div className="bg-white py-4 border-b">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <div className="flex-grow max-w-xs">
            <p className="text-sm font-medium mb-1">Capacity Range: {capacity[0]} - {capacity[1]} people</p>
            <Slider 
              defaultValue={[0, 200]} 
              min={0} 
              max={200} 
              step={5}
              value={capacity}
              onValueChange={handleCapacityChange}
              className="py-4"
            />
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

        <div className="flex flex-wrap gap-2">
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
