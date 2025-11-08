"use client";

import { useEffect } from "react";
import Container from "../General/Container/Container";
import SmoothLink from "../General/SmoothLink/SmoothLink";
import ThemeToggle from "../General/ThemeToggle/ThemeToggle";
import { scrollSpy } from "react-scroll";

const Header = () => {
  useEffect(() => {
    scrollSpy.update();
  }, []);
  return (
    <header className="w-full bg-accent h-24 sticky top-0 z-10">
      <Container className="flex items-center gap-4">
        <span>Qafy Mobile</span>
        <ThemeToggle />
        <SmoothLink to="hero" spy={true}>
          Hero
        </SmoothLink>
        <SmoothLink to="services" spy={true}>
          Services
        </SmoothLink>
      </Container>
    </header>
  );
};
export default Header;
