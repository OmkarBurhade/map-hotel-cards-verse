
import { useSearch } from "@/contexts/SearchContext";

const SearchResultsInfo = () => {
  const { filteredVenues, searchQuery } = useSearch();
  
  // Don't show the count when there are no venues found
  if (filteredVenues.length === 0) {
    return null;
  }
  
  return (
    <div className="text-lg font-medium mb-4">
      {filteredVenues.length} {searchQuery ? `gardens matching "${searchQuery}"` : 'popular gardens worldwide'}
    </div>
  );
};

export default SearchResultsInfo;
