'use client'

import Container from "../General/Container/Container";
import FooterContacts from "./FooterContacts/FooterContacts";
import FooterText from "./FooterText/FooterText";
import QuickLinks from "./QuickLinks/QuickLinks";

const Footer = () => {
  return (
    <footer className="w-full bg-linear-to-b border-t border-t-foreground from-background to-accent">
      <Container className="grid md:grid-cols-3 py-12 gap-10 md:text-left text-center">
        <FooterText />
        <QuickLinks />
        <FooterContacts/>
      </Container>
    </footer>
  );
};
export default Footer;
