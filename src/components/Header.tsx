import { Link } from "react-router-dom";
import { Heart, MapPin, Search } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";

export default function Header() {
  const { wishlist } = useWishlist();

  return (
    <header className="sticky top-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="tricolor-bar" />
      <div className="container flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <MapPin className="w-6 h-6 text-primary" />
          <span className="text-xl font-display font-bold text-foreground">
            tour<span className="text-primary">INDIA</span>
          </span>
        </Link>

        <nav className="flex items-center gap-4">
          <Link
            to="/"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <Search className="w-5 h-5 md:hidden" />
            <span className="hidden md:inline">Explore</span>
          </Link>
          <Link
            to="/wishlist"
            className="relative flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <Heart className="w-5 h-5" />
            <span className="hidden md:inline">Wishlist</span>
            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold">
                {wishlist.length}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
