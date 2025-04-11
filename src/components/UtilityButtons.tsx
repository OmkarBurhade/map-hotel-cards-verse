
import { Wifi, Clock, Zap, Flower2 } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";

interface UtilityButtonsProps {
  activeAmenities: string[];
  onAmenityToggle: (amenity: string) => void;
}

const UtilityButtons = ({ activeAmenities, onAmenityToggle }: UtilityButtonsProps) => {
  const isActive = (amenity: string) => activeAmenities.includes(amenity);


  return (
    <div className="flex flex-wrap gap-2 items-center">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              className={`p-2 rounded-full border transition-colors ${isActive('wifi')
                  ? 'bg-green-500 text-white border-green-500'
                  : 'border-gray-300 hover:bg-gray-100 text-gray-700'
                }`}
              onClick={() => onAmenityToggle('wifi')}
              aria-pressed={isActive('wifi')}
            >
              <Wifi className="h-5 w-5" />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{isActive('wifi') ? 'Remove WiFi filter' : 'Filter venues with WiFi'}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>



      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              className={`p-2 rounded-full border transition-colors ${isActive('power')
                  ? 'bg-green-500 text-white border-green-500'
                  : 'border-gray-300 hover:bg-gray-100 text-gray-700'
                }`}
              onClick={() => onAmenityToggle('power')}
              aria-pressed={isActive('power')}
            >
              <Zap className="h-5 w-5" />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{isActive('power') ? 'Remove power outlet filter' : 'Filter venues with power outlets'}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              className={`p-2 rounded-full border transition-colors ${isActive('gardens')
                  ? 'bg-green-500 text-white border-green-500'
                  : 'border-gray-300 hover:bg-gray-100 text-gray-700'
                }`}
              onClick={() => onAmenityToggle('gardens')}
              aria-pressed={isActive('gardens')}
            >
              <Flower2 className="h-5 w-5" />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{isActive('gardens') ? 'Remove garden filter' : 'Filter venues with gardens'}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              className={`p-2 rounded-full border transition-colors ${isActive('clock')
                  ? 'bg-green-500 text-white border-green-500'
                  : 'border-gray-300 hover:bg-gray-100 text-gray-700'
                }`}
              onClick={() => onAmenityToggle('clock')}
              aria-pressed={isActive('clock')}
            >
              <Clock className="h-5 w-5" />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{isActive('clock') ? 'Remove availability filter' : 'Filter venues with flexible availability'}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default UtilityButtons;
