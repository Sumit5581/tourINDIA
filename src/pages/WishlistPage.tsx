import { Heart, Trash2 } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";
import { getPlaceById } from "@/data/indiaData";
import PlaceCard from "@/components/PlaceCard";
import Header from "@/components/Header";
import { Link } from "react-router-dom";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const wishlistPlaces = wishlist.map(getPlaceById).filter(Boolean);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="container px-4 py-10">
        <div className="flex items-center gap-3 mb-8">
          <Heart className="w-7 h-7 text-primary" />
          <h1 className="text-3xl font-display font-bold text-foreground">My Wishlist</h1>
        </div>

        {wishlistPlaces.length === 0 ? (
          <div className="text-center py-20">
            <Heart className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
            <h2 className="text-xl font-display font-bold text-foreground mb-2">Your wishlist is empty</h2>
            <p className="text-muted-foreground mb-6">Start exploring and add places you'd love to visit!</p>
            <Link
              to="/"
              className="inline-flex px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:scale-105 transition-transform duration-200"
            >
              Explore Places
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlistPlaces.map(
              (place) =>
                place && <PlaceCard key={place.id} place={place} />
            )}
          </div>
        )}
      </section>
    </div>
  );
}
