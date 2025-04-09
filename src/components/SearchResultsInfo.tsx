
import { useSearch } from "@/contexts/SearchContext";

const SearchResultsInfo = () => {
  const { filteredVenues, searchQuery } = useSearch();
  
  return (
    <div className="text-lg font-medium mb-4">
      {filteredVenues.length} gardens {searchQuery ? `matching "${searchQuery}"` : 'in Los Angeles'}
    </div>
  );
};

export default SearchResultsInfo;
