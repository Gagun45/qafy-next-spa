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
  if (loading) return <>Loading...</>;
  if (error) return <>Something went wrong...</>;
  return (
    <div className="max-w-6xl flex flex-col gap-6">
      {reviews.map((review, index) => (
        <TestimonialCard key={review.name} review={review} index={index} />
      ))}
    </div>
  );
};
export default TestimonialsContainer;
