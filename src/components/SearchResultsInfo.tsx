
import { useSearch } from "@/contexts/SearchContext";

const SearchResultsInfo = () => {
  const {contentType, filteredEvents, filteredVenues, searchQuery } = useSearch();


  // Don't show the count when there are no venues found
  if (filteredVenues.length === 0) {
    return null;
  }

  return (
    <div className="text-lg font-medium my-4">
      {contentType ==="events"? (`${filteredEvents.length} ${searchQuery ? `upcoming events in"${searchQuery}"`: 'popular envents worldwide'}`):(`${filteredVenues.length} ${searchQuery ? `gardens matching "${searchQuery}"` : 'popular gardens worldwide'}`)}

    </div>
  );
};

export default SearchResultsInfo;
