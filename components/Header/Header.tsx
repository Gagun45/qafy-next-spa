"use client";

import { useEffect, useState } from "react";
import Container from "../General/Container/Container";
import SmoothLink from "../General/SmoothLink/SmoothLink";
import ThemeToggle from "../General/ThemeToggle/ThemeToggle";
import { scrollSpy } from "react-scroll";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    scrollSpy.update();
    const onScroll = () => {
      setScrolled(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`${scrolled&&'outline outline-foreground'} w-full bg-accent h-24 sticky top-0 z-10`}>
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
