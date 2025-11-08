"use client";

import Container from "@/components/General/Container/Container";
import ServicesHeading from "./ServicesHeading/ServicesHeading";
import ServicesGrid from "./ServicesGrid/ServicesGrid";

const Services = () => {
  return (
    <section id="services">
      <Container className="flex flex-col items-center">
        <ServicesHeading />
        <ServicesGrid />
      </Container>
    </section>
  );
};
export default Services;
