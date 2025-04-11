
import { useState } from "react";
import { venues, venueTypes } from "../data/venues";
import { Slider } from "@/components/ui/slider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import UtilityButtons from "./UtilityButtons";
import { useSearch } from "@/contexts/SearchContext";
import getMaxCapacity from "./MaxCapacity";

interface FilterBarProps {
  onFilterChange: (filters: string[]) => void;
  onCapacityChange?: (capacity: [number, number]) => void;

}

const FilterBar = ({ onFilterChange, onCapacityChange }: FilterBarProps) => {

  const {
    setSearchQuery,
    setCapacityRange,
    activeAmenities,
    setActiveAmenities,

  } = useSearch();

  const handleAmenityToggle = (amenity: string) => {
    // Fix: Directly set the new array instead of using a function
    const newAmenities = activeAmenities.includes(amenity)
      ? activeAmenities.filter(a => a !== amenity)
      : [...activeAmenities, amenity];

    setActiveAmenities(newAmenities);
  };

  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [capacity, setCapacity] = useState<[number, number]>([0, getMaxCapacity()]);
  const [isCapacityOpen, setIsCapacityOpen] = useState(false);



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
          <Popover open={isCapacityOpen} onOpenChange={setIsCapacityOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={`px-4 py-2 rounded-full flex items-center gap-2 ${capacity[0] > 0 || capacity[1] < capacity[1] ? "bg-green-600 text-white hover:bg-green-700" : ""}`}
              >
                <span>
                  {capacity[0] > 0 || capacity[1] < capacity[1]
                    ? `Capacity: ${capacity[0]} - ${capacity[1]}`
                    : "Any Capacity"}
                </span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-4">
              <div>
                <h3 className="font-medium mb-2">Guest Capacity</h3>
                <p className="text-sm text-gray-600 mb-4">Select min and max capacity</p>
                <div className="mb-2">
                  <p className="text-sm font-medium">Range: {capacity[0]} - {capacity[1]} people</p>
                </div>
                <Slider
                  defaultValue={[0, capacity[1]]}
                  min={0}
                  max={capacity[1]}
                  step={1}
                  value={capacity}
                  onValueChange={handleCapacityChange}
                  className="py-4"
                />
              </div>
            </PopoverContent>
          </Popover>

          <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 no-scrollbar">
            {venueTypes.filter(type => type !== "All Filters").map((filter) => (
              <button
                key={filter}
                onClick={() => toggleFilter(filter)}
                className={`px-3 py-1 rounded-full text-sm whitespace-nowrap flex items-center gap-1 transition-colors ${activeFilters.includes(filter)
                  ? "bg-green-600 text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>
          <UtilityButtons
            activeAmenities={activeAmenities}
            onAmenityToggle={handleAmenityToggle}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
