import { Star, User } from "lucide-react";
import { Review } from "@/data/indiaData";

interface ReviewSectionProps {
  reviews: Review[];
}

export default function ReviewSection({ reviews }: ReviewSectionProps) {
  return (
    <div className="space-y-4">
      <h3 className="font-display font-bold text-xl text-foreground">Reviews</h3>
      {reviews.length === 0 && (
        <p className="text-muted-foreground">No reviews yet.</p>
      )}
      {reviews.map((review) => (
        <div key={review.id} className="bg-muted rounded-2xl p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="w-4 h-4 text-primary" />
              </div>
              <span className="font-medium text-foreground text-sm">{review.user}</span>
            </div>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${
                    i < review.rating ? "fill-gold text-gold" : "text-border"
                  }`}
                />
              ))}
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-2">{review.comment}</p>
          <p className="text-xs text-muted-foreground mt-1">{review.date}</p>
        </div>
      ))}
    </div>
  );
}
