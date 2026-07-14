"use client";

import Container from "@/components/General/Container/Container";
import WhyUsHeading from "./WhyUsHeading/WhyUsHeading";
import ReasonsGrid from "./ReasonsGrid/ReasonsGrid";

const WhyUs = () => {
  return (
    <section id="whyus" className="overflow-hidden border-y border-border/60 bg-accent/45">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,color-mix(in_oklch,var(--border)_45%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklch,var(--border)_45%,transparent)_1px,transparent_1px)] bg-[size:48px_48px] opacity-25 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />
      <Container>
        <WhyUsHeading />
        <ReasonsGrid />
      </Container>
    </section>
  );
};
export default WhyUs;
