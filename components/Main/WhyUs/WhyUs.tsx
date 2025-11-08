"use client";

import Container from "@/components/General/Container/Container";
import WhyUsHeading from "./WhyUsHeading/WhyUsHeading";
import ReasonsGrid from "./ReasonsGrid/ReasonsGrid";

const WhyUs = () => {
  return (
    <section id="whyus">
      <Container>
        <WhyUsHeading />
        <ReasonsGrid />
      </Container>
    </section>
  );
};
export default WhyUs;
