"use client";

import Container from "@/components/General/Container/Container";
import LeftCard from "./LeftCard/LeftCard";
import RightCard from "./RightCard/RightCard";

const Contacts = () => {
  return (
    <section id="contacts" className="overflow-hidden bg-accent/35">
      <Container>
        <div className="surfaceCard grid w-full overflow-hidden p-2 md:grid-cols-[0.85fr_1.15fr]">
          <LeftCard />
          <RightCard />
        </div>
      </Container>
    </section>
  );
};
export default Contacts;
