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
import { Dialog } from "@/components/ui/dialog";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    scrollSpy.update();
    const onScroll = () => {
      setScrolled(window.scrollY > 400);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 64rem)");
    const closeAtDesktop = (event: MediaQueryListEvent | MediaQueryList) => {
      if (event.matches) setMenuOpen(false);
    };

    closeAtDesktop(desktop);
    desktop.addEventListener("change", closeAtDesktop);
    return () => desktop.removeEventListener("change", closeAtDesktop);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`${
        scrolled && !menuOpen
          ? "border-border/80 bg-background/85 shadow-[0_12px_35px_-24px_rgba(15,23,42,0.7)]"
          : "border-transparent bg-background/70"
      } sticky top-0 z-40 h-(--header-height) w-full border-b backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300`}
    >
      <Dialog open={menuOpen} onOpenChange={setMenuOpen}>
        <Container className="flex-row justify-between gap-4">
          <div className="flex items-center gap-4">
            <SmoothLink to="home" className="group flex items-center gap-3 text-xl font-bold tracking-tight sm:text-2xl">
              <span className="flex size-10 items-center justify-center rounded-2xl bg-primary text-sm font-black text-primary-foreground shadow-lg shadow-primary/25 transition-transform group-hover:-rotate-3">Q</span>
              <span>Qafy <span className="text-primary">Mobile</span></span>
            </SmoothLink>
            <div className="hidden items-center gap-4 lg:flex">
              <ThemeToggle />
              <LocaleSwitcher />
            </div>
          </div>
          <DesktopNav />
          <MobileMenuToggle menuOpen={menuOpen} />
        </Container>
        <MobileNav closeMenu={closeMenu} />
      </Dialog>
    </header>
  );
};
export default Header;
