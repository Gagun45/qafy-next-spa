import SmoothLink from "@/components/General/SmoothLink/SmoothLink";
import { LINKS } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { scrollSpy } from "react-scroll";

interface Props {
  closeMenu: () => void;
  menuOpen: boolean;
}

const MobileNav = ({ closeMenu, menuOpen }: Props) => {
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
          className="lg:hidden bg-muted border-b border-foreground backdrop-blur-md px-6 absolute top-24 w-full -z-10!"
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
                  {link.label}
                </SmoothLink>
              </li>
            ))}
          </ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};
export default MobileNav;
