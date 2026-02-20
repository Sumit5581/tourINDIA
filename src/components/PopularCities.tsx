import { cities } from "@/data/indiaData";
import { useNavigate } from "react-router-dom";

export default function PopularCities() {
  const navigate = useNavigate();

  return (
    <section className="py-16">
      <div className="container px-4">
        <h2 className="text-3xl font-display font-bold text-foreground text-center mb-2">
          Popular Destinations
        </h2>
        <p className="text-muted-foreground text-center mb-10">
          Explore the most visited cities across incredible India
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((city, i) => (
            <button
              key={city.id}
              onClick={() => navigate(`/city/${city.id}`)}
              className="group relative h-64 rounded-2xl overflow-hidden card-hover text-left"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <img
                src={city.image}
                alt={city.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-2xl font-display font-bold text-primary-foreground">
                  {city.name}
                </h3>
                <p className="text-sm text-primary-foreground/80 mt-1">{city.state}</p>
                <p className="text-xs text-primary-foreground/70 mt-1">{city.placeCount} places to visit</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
