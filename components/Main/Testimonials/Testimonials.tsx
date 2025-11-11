"use client";

import Container from "@/components/General/Container/Container";
import TestimonialsHeading from "./TestimonialsHeading/TestimonialsHeading";
import TestimonialsContainer from "./TestimonialsContainer/TestimonialsContainer";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <Container className="space-y-6">
        <TestimonialsHeading />
        <TestimonialsContainer />
      </Container>
    </section>
  );
};
export default Testimonials;
