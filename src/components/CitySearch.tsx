import { useState, useRef, useEffect } from "react";
import { Search } from "lucide-react";
import { getCitiesBySearch, City } from "@/data/indiaData";
import { useNavigate } from "react-router-dom";


export default function CitySearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<City[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setResults(getCitiesBySearch(query));
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timerRef.current);
  }, [query]);

  return (
    <div className="w-full max-w-2xl mx-auto relative">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          placeholder="Search for a city in India... (e.g. Delhi, Jaipur, Goa)"
          className="w-full h-14 pl-12 pr-4 rounded-full border-2 border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-300 font-body text-base"
        />
      </div>

      {/* Loading bar */}
      {isLoading && (
        <div className="mt-2 rounded-full overflow-hidden">
          <div className="search-loading-bar rounded-full" />
        </div>
      )}

      {/* Results */}
      {isFocused && !isLoading && results.length > 0 && (
        <div className="absolute top-full mt-3 w-full bg-card rounded-2xl border border-border shadow-xl overflow-hidden z-50 animate-fade-up">
          {results.map((city) => (
            <button
              key={city.id}
              onMouseDown={() => navigate(`/city/${city.id}`)}
              className="w-full flex items-center gap-4 p-4 hover:bg-muted transition-colors duration-200 text-left"
            >
              <img
                src={city.image}
                alt={city.name}
                className="w-14 h-14 rounded-xl object-cover"
              />
              <div>
                <p className="font-display font-semibold text-foreground">{city.name}</p>
                <p className="text-sm text-muted-foreground">{city.state} · {city.placeCount} places</p>
              </div>
            </button>
          ))}
        </div>
      )}

      {isFocused && !isLoading && query.trim() && results.length === 0 && (
        <div className="absolute top-full mt-3 w-full bg-card rounded-2xl border border-border shadow-xl p-6 text-center z-50 animate-fade-up">
          <p className="text-muted-foreground">No cities found for "{query}"</p>
          <p className="text-sm text-muted-foreground mt-1">Try Delhi, Agra, Jaipur, Mumbai, Varanasi, or Goa</p>
        </div>
      )}
    </div>
  );
}
