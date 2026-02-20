import { createContext, useContext, useState, useCallback, ReactNode } from "react";

interface WishlistContextType {
  wishlist: string[];
  addToWishlist: (placeId: string) => void;
  removeFromWishlist: (placeId: string) => void;
  isInWishlist: (placeId: string) => boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem("india-travel-wishlist");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const save = (items: string[]) => {
    localStorage.setItem("india-travel-wishlist", JSON.stringify(items));
  };

  const addToWishlist = useCallback((placeId: string) => {
    setWishlist((prev) => {
      if (prev.includes(placeId)) return prev;
      const next = [...prev, placeId];
      save(next);
      return next;
    });
  }, []);

  const removeFromWishlist = useCallback((placeId: string) => {
    setWishlist((prev) => {
      const next = prev.filter((id) => id !== placeId);
      save(next);
      return next;
    });
  }, []);

  const isInWishlist = useCallback(
    (placeId: string) => wishlist.includes(placeId),
    [wishlist]
  );

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist must be used within WishlistProvider");
  return ctx;
}
