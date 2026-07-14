"use client";

import Container from "@/components/General/Container/Container";
import TestimonialsHeading from "./TestimonialsHeading/TestimonialsHeading";
import TestimonialsContainer from "./TestimonialsContainer/TestimonialsContainer";
import TestimonialsLinks from "./TestimonialsLinks/TestimonialsLinks";

const Testimonials = () => {
  return (
    <section id="testimonials" className="overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/6 blur-3xl" />
      <Container className="space-y-6">
        <TestimonialsHeading />
        <TestimonialsContainer />
        <TestimonialsLinks />
      </Container>
    </section>
  );
};
export default Testimonials;
