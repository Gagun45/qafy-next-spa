"use client";

import Container from "@/components/General/Container/Container";
import LeftCard from "./LeftCard/LeftCard";
import RightCard from "./RightCard/RightCard";

const Contacts = () => {
  return (
    <section id="contacts">
      <Container className="grid md:grid-cols-2 gap-12">
        <LeftCard />
        <RightCard />
      </Container>
    </section>
  );
};
export default Contacts;
