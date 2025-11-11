"use client";

import { useEffect, useState } from "react";
import Container from "../General/Container/Container";
import ThemeToggle from "../General/ThemeToggle/ThemeToggle";
import { scrollSpy } from "react-scroll";
import DesktopNav from "./DesktopNav/DesktopNav";
import MobileMenuToggle from "./MobileMenuToggle/MobileMenuToggle";
import MobileNav from "./MobileNav/MobileNav";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    scrollSpy.update();
    const onScroll = () => {
      setScrolled(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`${
        (scrolled || menuOpen) && "outline outline-foreground"
      } w-full bg-accent h-24 sticky top-0 z-10`}
    >
      <Container className="flex-row justify-between gap-4">
        <div className="flex items-center gap-2">
          <span>Qafy Mobile</span>
          <ThemeToggle />
        </div>
        <DesktopNav />
        <MobileMenuToggle menuOpen={menuOpen} toggleMenu={toggleMenu} />
      </Container>
      <MobileNav closeMenu={closeMenu} menuOpen={menuOpen} />
    </header>
  );
};
export default Header;
