"use client";

import Container from "@/components/General/Container/Container";
import TestimonialsHeading from "./TestimonialsHeading/TestimonialsHeading";
import TestimonialsContainer from "./TestimonialsContainer/TestimonialsContainer";
import TestimonialLinks from "./TestimonialsLinks/TestimonialsLinks";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <Container className="space-y-6">
        <TestimonialsHeading />
        <TestimonialsContainer />
        <TestimonialLinks />
      </Container>
    </section>
  );
};
export default Testimonials;
