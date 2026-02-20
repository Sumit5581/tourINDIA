import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, Heart, MapPin, Navigation, ExternalLink } from "lucide-react";
import { getPlaceById, getCityById } from "@/data/indiaData";
import { useWishlist } from "@/context/WishlistContext";
import ReviewSection from "@/components/ReviewSection";
import Header from "@/components/Header";

export default function PlacePage() {
  const { placeId } = useParams();
  const place = getPlaceById(placeId || "");
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();

  if (!place) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container px-4 py-20 text-center">
          <h1 className="text-2xl font-display font-bold text-foreground">Place not found</h1>
          <Link to="/" className="mt-4 inline-block text-primary hover:underline">← Back to Home</Link>
        </div>
      </div>
    );
  }

  const city = getCityById(place.city);
  const wishlisted = isInWishlist(place.id);
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${place.coordinates.lat},${place.coordinates.lng}`;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative h-80 overflow-hidden">
        <img src={place.image} alt={place.name} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 container">
          <Link
            to={city ? `/city/${city.id}` : "/"}
            className="inline-flex items-center gap-1 text-sm mb-3"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            <ArrowLeft className="w-4 h-4" /> Back to {city?.name || "Home"}
          </Link>
          <h1 className="text-3xl md:text-4xl font-display font-bold" style={{ color: "white" }}>{place.name}</h1>
          <div className="flex items-center gap-3 mt-2">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-gold text-gold" />
              <span className="text-sm font-semibold" style={{ color: "white" }}>{place.rating}</span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.7)" }}>({place.reviewCount} reviews)</span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground text-xs">{place.category}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container px-4 py-10">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Actions */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => wishlisted ? removeFromWishlist(place.id) : addToWishlist(place.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                wishlisted
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-foreground hover:bg-primary/10"
              }`}
            >
              <Heart className={`w-5 h-5 ${wishlisted ? "fill-current" : ""}`} />
              {wishlisted ? "In Wishlist" : "Add to Wishlist"}
            </button>

            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-medium transition-all duration-300 hover:scale-105"
            >
              <Navigation className="w-5 h-5" />
              Get Directions
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Description */}
          <div>
            <h2 className="text-xl font-display font-bold text-foreground mb-2">About</h2>
            <p className="text-muted-foreground leading-relaxed">{place.description}</p>
          </div>

          {/* Details */}
          <div className="bg-muted rounded-2xl p-6 grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Distance from Center</p>
              <p className="text-foreground font-medium flex items-center gap-1 mt-1">
                <MapPin className="w-4 h-4 text-primary" /> {place.distanceFromCenter}
              </p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">City</p>
              <p className="text-foreground font-medium mt-1">{city?.name}, {city?.state}</p>
            </div>
          </div>

          {/* Reviews */}
          <ReviewSection reviews={place.reviews} />
        </div>
      </section>
    </div>
  );
}
