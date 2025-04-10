
import { useSearch } from "@/contexts/SearchContext";

const SearchResultsInfo = () => {
  const { filteredVenues, searchQuery } = useSearch();
  
  return (
    <div className="text-lg font-medium mb-4">
      {filteredVenues.length} {searchQuery ? `gardens matching "${searchQuery}"` : 'popular gardens worldwide'}
    </div>
  );
};

export default SearchResultsInfo;
