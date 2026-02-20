import { Star, Heart, MapPin } from "lucide-react";
import { Place } from "@/data/indiaData";
import { useWishlist } from "@/context/WishlistContext";
import { useNavigate } from "react-router-dom";

interface PlaceCardProps {
  place: Place;
}

export default function PlaceCard({ place }: PlaceCardProps) {
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const navigate = useNavigate();
  const wishlisted = isInWishlist(place.id);

  const toggleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    wishlisted ? removeFromWishlist(place.id) : addToWishlist(place.id);
  };

  return (
    <div
      onClick={() => navigate(`/place/${place.id}`)}
      className="group bg-card rounded-2xl overflow-hidden border border-border card-hover cursor-pointer"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={place.image}
          alt={place.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <button
          onClick={toggleWishlist}
          className="absolute top-3 right-3 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-transform duration-200"
        >
          <Heart
            className={`w-5 h-5 transition-colors duration-200 ${
              wishlisted ? "fill-primary text-primary" : "text-foreground"
            }`}
          />
        </button>
        <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
          {place.category}
        </span>
      </div>

      <div className="p-4">
        <h3 className="font-display font-bold text-lg text-foreground">{place.name}</h3>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{place.description}</p>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-gold text-gold" />
            <span className="text-sm font-semibold text-foreground">{place.rating}</span>
            <span className="text-xs text-muted-foreground">({place.reviewCount})</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <MapPin className="w-3 h-3" />
            <span className="text-xs">{place.distanceFromCenter}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
