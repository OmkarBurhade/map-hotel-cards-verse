import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { eventCategories, timeOfDayOptions, languageOptions } from "../data/events";
import { useSearch } from "@/contexts/SearchContext";

const EventFilterBar = () => {
  const {
    eventPriceRange,
    setEventPriceRange,
    activeEventCategories,
    setActiveEventCategories,
    activeTimeOfDay,
    setActiveTimeOfDay,
    activeLanguages,
    setActiveLanguages
  } = useSearch();

  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [isTimeOpen, setIsTimeOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const toggleCategory = (category: string) => {
    const newCategories = activeEventCategories.includes(category)
      ? activeEventCategories.filter(c => c !== category)
      : [...activeEventCategories, category];

    setActiveEventCategories(newCategories);
  };

  const toggleTimeOfDay = (time: string) => {
    const newTimes = activeTimeOfDay.includes(time)
      ? activeTimeOfDay.filter(t => t !== time)
      : [...activeTimeOfDay, time];

    setActiveTimeOfDay(newTimes);
  };

  const toggleLanguage = (language: string) => {
    const newLanguages = activeLanguages.includes(language)
      ? activeLanguages.filter(l => l !== language)
      : [...activeLanguages, language];

    setActiveLanguages(newLanguages);
  };

  const handlePriceChange = (values: number[]) => {
    const priceRange: [number, number] = [values[0], values[1]];
    setEventPriceRange(priceRange);
  };

  return (
    <div className="bg-white py-4 border-b">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <Popover open={isPriceOpen} onOpenChange={setIsPriceOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={`px-4 py-2 rounded-full flex items-center gap-2 ${eventPriceRange[0] > 0 || eventPriceRange[1] < 100
                    ? "bg-green-600 text-white hover:bg-green-700 hover:text-white"
                    : ""
                  }`}
              >
                <span>
                  {eventPriceRange[0] > 0 || eventPriceRange[1] < 100
                    ? `Price: $${eventPriceRange[0]} - $${eventPriceRange[1]}`
                    : "Any Price"}
                </span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-4 ml-5">
              <div>
                <h3 className="font-medium mb-2">Price Range</h3>
                <p className="text-sm text-gray-600 mb-4">Select min and max price</p>
                <div className="mb-2">
                  <p className="text-sm font-medium">${eventPriceRange[0]} - ${eventPriceRange[1]}</p>
                </div>
                <Slider
                  defaultValue={[0, 100]}
                  min={0}
                  max={100}
                  step={1}
                  value={eventPriceRange}
                  onValueChange={handlePriceChange}
                  className="py-4"
                />
              </div>
            </PopoverContent>
          </Popover>

          <Popover open={isTimeOpen} onOpenChange={setIsTimeOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={`px-4 py-2 rounded-full flex items-center gap-2 ${activeTimeOfDay.length > 0
                    ? "bg-green-600 text-white hover:bg-green-700 hover:text-white"
                    : ""
                  }`}
              >
                <span>
                  {activeTimeOfDay.length > 0
                    ? `Time: ${activeTimeOfDay.length} selected`
                    : "Time of Day: Any"}
                </span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-4">
              <div>
                <h3 className="font-medium mb-2">Time of Day</h3>
                <div className="space-y-2">
                  {timeOfDayOptions.map((time) => (
                    <div key={time} className="flex items-center">
                      <div
                        className={`w-5 h-5 rounded border flex items-center justify-center mr-2 cursor-pointer ${activeTimeOfDay.includes(time)
                            ? "bg-green-600 border-green-600"
                            : "border-gray-300"
                          }`}
                        onClick={() => toggleTimeOfDay(time)}
                      >
                        {activeTimeOfDay.includes(time) && <Check className="h-3 w-3 text-white" />}
                      </div>
                      <span onClick={() => toggleTimeOfDay(time)} className="text-sm select-none cursor-pointer">{time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </PopoverContent>
          </Popover>

          <Popover open={isLanguageOpen} onOpenChange={setIsLanguageOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={`px-4 py-2 rounded-full flex items-center gap-2 ${activeLanguages.length > 0
                    ? "bg-green-600 text-white hover:bg-green-700 hover:text-white"
                    : ""
                  }`}
              >
                <span>
                  {activeLanguages.length > 0
                    ? `Language: ${activeLanguages.length} selected`
                    : "Language: Any"}
                </span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-4">
              <div>
                <h3 className="font-medium mb-2">Language</h3>
                <div className="space-y-2">
                  {languageOptions.map((language) => (
                    <div key={language} className="flex items-center">
                      <div
                        className={`w-5 h-5 rounded border flex items-center justify-center mr-2 cursor-pointer ${activeLanguages.includes(language)
                            ? "bg-green-600 border-green-600"
                            : "border-gray-300"
                          }`}
                        onClick={() => toggleLanguage(language)}
                      >
                        {activeLanguages.includes(language) && <Check className="h-3 w-3 text-white" />}
                      </div>
                      <span onClick={() => toggleLanguage(language)} className="text-sm select-none cursor-pointer">{language}</span>
                    </div>
                  ))}
                </div>
              </div>
            </PopoverContent>
          </Popover>

          <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 mt-3 no-scrollbar">
            {eventCategories.map((category) => (
              <button
                key={category}
                onClick={() => toggleCategory(category)}
                className={`px-3 py-1 rounded-full text-sm whitespace-nowrap flex items-center gap-1 transition-colors ${activeEventCategories.includes(category)
                    ? "bg-green-600 text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventFilterBar;
