'use client'

import Container from "../General/Container/Container";
import FooterText from "./FooterText/FooterText";
import QuickLinks from "./QuickLinks/QuickLinks";
import GetInTouch from "./GetInTouch/GetInTouch";

const Footer = () => {
  return (
    <footer className="w-full border-t border-border bg-[#071426] text-slate-200">
      <Container className="py-14 md:py-16">
        <div className="grid w-full gap-12 text-center md:grid-cols-[1.4fr_0.8fr_1fr] md:text-left">
          <FooterText />
          <QuickLinks />
          <GetInTouch/>
        </div>
        <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-white/15 to-transparent" />
        <div className="mt-6 flex w-full items-center justify-center text-xs text-slate-500 md:justify-start">Qafy Mobile</div>
      </Container>
    </footer>
  );
};
export default Footer;
