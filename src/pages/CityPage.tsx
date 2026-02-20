import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getCityById, getPlacesByCity } from "@/data/indiaData";
import PlaceCard from "@/components/PlaceCard";
import Header from "@/components/Header";

export default function CityPage() {
  const { cityId } = useParams();
  const city = getCityById(cityId || "");
  const cityPlaces = getPlacesByCity(cityId || "");

  if (!city) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container px-4 py-20 text-center">
          <h1 className="text-2xl font-display font-bold text-foreground">City not found</h1>
          <Link to="/" className="mt-4 inline-block text-primary hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* City Banner */}
      <section className="relative h-64 overflow-hidden">
        <img src={city.image} alt={city.name} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 container">
          <Link to="/" className="inline-flex items-center gap-1 text-sm mb-3" style={{ color: "rgba(255,255,255,0.8)" }}>
            <ArrowLeft className="w-4 h-4" /> Back
          </Link>
          <h1 className="text-4xl font-display font-bold" style={{ color: "white" }}>{city.name}</h1>
          <p className="mt-1" style={{ color: "rgba(255,255,255,0.8)" }}>{city.state} · {city.description}</p>
        </div>
      </section>

      {/* Places */}
      <section className="container px-4 py-10">
        <h2 className="text-2xl font-display font-bold text-foreground mb-6">
          Tourist Places in {city.name}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cityPlaces.map((place) => (
            <PlaceCard key={place.id} place={place} />
          ))}
        </div>
      </section>
    </div>
  );
}
