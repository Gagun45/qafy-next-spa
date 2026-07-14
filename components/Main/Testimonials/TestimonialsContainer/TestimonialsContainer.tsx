import type { Review } from "@/lib/types";
import { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard/TestimonialCard";
import { getGoogleReviews } from "@/actions/actions.testimonials";

const TestimonialsContainer = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await getGoogleReviews();
      if (!res.success) throw new Error("Failed to fetch");
      setReviews(res.data.testimonials);
    } catch {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (loading)
    return (
      <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2" aria-label="Loading reviews">
        {[0, 1, 2, 3].map((item) => (
          <div key={item} className="surfaceCard animate-pulse p-7 text-left">
            <div className="mb-6 flex items-center gap-3">
              <div className="size-11 rounded-full bg-muted" />
              <div className="space-y-2">
                <div className="h-3 w-32 rounded bg-muted" />
                <div className="h-2.5 w-20 rounded bg-muted" />
              </div>
            </div>
            <div className="space-y-3">
              <div className="h-3 w-full rounded bg-muted" />
              <div className="h-3 w-11/12 rounded bg-muted" />
              <div className="h-3 w-3/4 rounded bg-muted" />
            </div>
          </div>
        ))}
      </div>
    );
  if (error)
    return (
      <div className="surfaceCard w-full border-dashed p-8 text-center">
        <div className="mx-auto mb-3 size-2 rounded-full bg-destructive shadow-[0_0_0_6px_color-mix(in_oklch,var(--destructive)_15%,transparent)]" />
        <p className="font-medium text-foreground">Something went wrong...</p>
      </div>
    );
  return (
    <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2">
      {reviews.map((review, index) => (
        <TestimonialCard key={review.name} review={review} index={index} />
      ))}
    </div>
  );
};
export default TestimonialsContainer;
