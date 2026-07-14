"use client";

import Container from "@/components/General/Container/Container";
import ServicesHeading from "./ServicesHeading/ServicesHeading";
import ServicesGrid from "./ServicesGrid/ServicesGrid";

const Services = () => {
  return (
    <section id="services" className="overflow-hidden">
      <div className="pointer-events-none absolute -right-40 top-20 size-96 rounded-full bg-primary/8 blur-3xl" />
      <Container>
        <ServicesHeading />
        <ServicesGrid />
      </Container>
    </section>
  );
};
export default Services;
