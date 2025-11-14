// TestimonialsContainer.tsx
import type { Review } from "@/lib/types";
import TestimonialCard from "./TestimonialCard/TestimonialCard";
import { getGoogleReviews } from "@/actions/actions.testimonials";

// No "use client" — this is now a server component
const TestimonialsContainer = async () => {
  try {
    const res = await getGoogleReviews();
    if (!res.success || !res.data?.testimonials) {
      return <p>Something went wrong...</p>;
    }

    const reviews: Review[] = res.data.testimonials;

    return (
      <div className="max-w-6xl flex flex-col gap-6">
        {reviews.map((review, index) => (
          <TestimonialCard key={review.name} review={review} index={index} />
        ))}
      </div>
    );
  } catch {
    return <p>Something went wrong...</p>;
  }
};

export default TestimonialsContainer;
