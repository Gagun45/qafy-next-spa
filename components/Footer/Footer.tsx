'use client'

import Container from "../General/Container/Container";
import FooterText from "./FooterText/FooterText";
import QuickLinks from "./QuickLinks/QuickLinks";
import GetInTouch from "./GetInTouch/GetInTouch";

const Footer = () => {
  return (
    <footer className="w-full bg-linear-to-b border-t border-t-foreground from-background to-accent">
      <Container className="grid md:grid-cols-3 py-12 gap-10 md:text-left text-center">
        <FooterText />
        <QuickLinks />
        <GetInTouch/>
      </Container>
    </footer>
  );
};
export default Footer;
