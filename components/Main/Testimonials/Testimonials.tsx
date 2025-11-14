import React, { Suspense } from "react";
import Container from "@/components/General/Container/Container";
import TestimonialsHeading from "./TestimonialsHeading/TestimonialsHeading";
import TestimonialsLinks from "./TestimonialsLinks/TestimonialsLinks";

// Lazy load the container
const TestimonialsContainer = React.lazy(
  () => import("./TestimonialsContainer/TestimonialsContainer")
);

const Testimonials = () => {
  return (
    <section id="testimonials">
      <Container className="space-y-6">
        <TestimonialsHeading />

        {/* Suspense shows fallback until the lazy component loads */}
        <Suspense fallback={<div>Loading testimonials...</div>}>
          <TestimonialsContainer />
        </Suspense>

        <TestimonialsLinks />
      </Container>
    </section>
  );
};

export default Testimonials;
