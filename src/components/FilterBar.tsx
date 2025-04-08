
import { useState } from "react";
import { venueTypes } from "../data/venues";
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
import { Wifi, Clock, Zap } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

interface FilterBarProps {
  onFilterChange: (filters: string[]) => void;
  onCapacityChange?: (capacity: [number, number]) => void;
}

const FilterBar = ({ onFilterChange, onCapacityChange }: FilterBarProps) => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [capacity, setCapacity] = useState<[number, number]>([0, 200]);
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

  const handleUtilityButtonClick = (utility: string) => {
    toast({
      title: `${utility} Filter`,
      description: getUtilityDescription(utility),
    });
  };

  const getUtilityDescription = (utility: string): string => {
    switch(utility) {
      case "WiFi":
        return "Show only venues that offer free WiFi connections";
      case "Availability":
        return "Filter venues by immediate availability";
      case "Power":
        return "Show venues with abundant power outlets for equipment";
      default:
        return "";
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
                className={`px-4 py-2 rounded-full flex items-center gap-2 ${capacity[0] > 0 || capacity[1] < 200 ? "bg-green-600 text-white hover:bg-green-700" : ""}`}
              >
                <span>
                  {capacity[0] > 0 || capacity[1] < 200 
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
                  defaultValue={[0, 200]} 
                  min={0} 
                  max={200} 
                  step={5}
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
                className={`px-3 py-1 rounded-full text-sm whitespace-nowrap flex items-center gap-1 transition-colors ${
                  activeFilters.includes(filter)
                    ? "bg-green-600 text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <button 
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
            onClick={() => handleUtilityButtonClick("WiFi")}
            title="Show venues with WiFi"
          >
            <Wifi className="h-5 w-5 text-gray-600" />
          </button>
          <button 
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
            onClick={() => handleUtilityButtonClick("Availability")}
            title="Filter by availability"
          >
            <Clock className="h-5 w-5 text-gray-600" />
          </button>
          <button 
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
            onClick={() => handleUtilityButtonClick("Power")}
            title="Show venues with power outlets"
          >
            <Zap className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
