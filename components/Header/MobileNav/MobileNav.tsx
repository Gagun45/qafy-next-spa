import LocaleSwitcher from "@/components/General/LocaleSwitcher/LocaleSwitcher";
import SmoothLink from "@/components/General/SmoothLink/SmoothLink";
import ThemeToggle from "@/components/General/ThemeToggle/ThemeToggle";
import { LINKS } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { scrollSpy } from "react-scroll";

interface Props {
  closeMenu: () => void;
  menuOpen: boolean;
}

const MobileNav = ({ closeMenu, menuOpen }: Props) => {
  const t = useTranslations("NavLinks");
  useEffect(() => {
    scrollSpy.update();
  });
  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="absolute top-24 z-30 w-full border-b border-border bg-background/95 px-5 pb-6 shadow-2xl shadow-black/10 backdrop-blur-xl lg:hidden"
        >
          <ul className="flex flex-col gap-2 pb-6">
            {LINKS.map((link) => {
              const isContact = link.label === "Contacts";
              return (
                <li key={link.href} className="w-full">
                  <SmoothLink
                    onClick={closeMenu}
                    to={link.href}
                    className={`block w-full rounded-2xl px-4 py-3 text-left text-base transition-colors hover:bg-accent hover:text-primary ${isContact ? "mt-2 bg-primary text-center font-semibold text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 hover:text-primary-foreground" : ""}`}
                  >
                    {t(`${link.href}`)}
                  </SmoothLink>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center justify-between border-t border-border pt-5">
            <ThemeToggle />
            <LocaleSwitcher />
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};
export default MobileNav;
