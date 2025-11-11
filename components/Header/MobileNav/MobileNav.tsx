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
          className="lg:hidden bg-muted border-b border-foreground backdrop-blur-md px-6 pb-6 absolute top-24 w-full -z-10!"
        >
          <ul className="flex flex-col space-y-4 tracking-wider py-4 items-center">
            {LINKS.map((link) => (
              <li key={link.href}>
                <SmoothLink
                  onClick={closeMenu}
                  to={link.href}
                  spy={true}
                  className="hover:underline"
                >
                  {t(`${link.href}`)}
                </SmoothLink>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-center gap-8">
            <ThemeToggle />
            <LocaleSwitcher />
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};
export default MobileNav;
