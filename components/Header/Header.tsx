"use client";

import { useEffect, useState } from "react";
import Container from "../General/Container/Container";
import ThemeToggle from "../General/ThemeToggle/ThemeToggle";
import { scrollSpy } from "react-scroll";
import DesktopNav from "./DesktopNav/DesktopNav";
import MobileMenuToggle from "./MobileMenuToggle/MobileMenuToggle";
import MobileNav from "./MobileNav/MobileNav";
import LocaleSwitcher from "../General/LocaleSwitcher/LocaleSwitcher";
import SmoothLink from "../General/SmoothLink/SmoothLink";

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
        scrolled && !menuOpen
          ? "border-border/80 bg-background/85 shadow-[0_12px_35px_-24px_rgba(15,23,42,0.7)]"
          : "border-transparent bg-background/70"
      } sticky top-0 z-40 h-24 w-full border-b backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300`}
    >
      <Container className="flex-row justify-between gap-4">
        <div className="flex items-center gap-4">
          <SmoothLink to="home" className="group flex items-center gap-3 text-xl font-bold tracking-tight sm:text-2xl">
            <span className="flex size-10 items-center justify-center rounded-2xl bg-primary text-sm font-black text-primary-foreground shadow-lg shadow-primary/25 transition-transform group-hover:-rotate-3">Q</span>
            <span>Qafy <span className="text-primary">Mobile</span></span>
          </SmoothLink>
          <div className="lg:flex items-center gap-4 hidden">
            <ThemeToggle />
            <LocaleSwitcher />
          </div>
        </div>
        <DesktopNav />
        <MobileMenuToggle menuOpen={menuOpen} toggleMenu={toggleMenu} />
      </Container>
      <MobileNav closeMenu={closeMenu} menuOpen={menuOpen} />
    </header>
  );
};
export default Header;
