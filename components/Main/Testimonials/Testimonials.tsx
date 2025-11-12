"use client";

import Container from "@/components/General/Container/Container";
import TestimonialsHeading from "./TestimonialsHeading/TestimonialsHeading";
import TestimonialsContainer from "./TestimonialsContainer/TestimonialsContainer";
import TestimonialsLinks from "./TestimonialsLinks/TestimonialsLinks";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <Container className="space-y-6">
        <TestimonialsHeading />
        <TestimonialsContainer />
        <TestimonialsLinks />
      </Container>
    </section>
  );
};
export default Testimonials;
