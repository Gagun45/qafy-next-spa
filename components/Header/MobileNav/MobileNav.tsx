import LocaleSwitcher from "@/components/General/LocaleSwitcher/LocaleSwitcher";
import SmoothLink from "@/components/General/SmoothLink/SmoothLink";
import ThemeToggle from "@/components/General/ThemeToggle/ThemeToggle";
import {
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { LINKS } from "@/lib/constants";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";

interface Props {
  closeMenu: () => void;
}

const MobileNav = ({ closeMenu }: Props) => {
  const t = useTranslations("NavLinks");
  const reduceMotion = useReducedMotion();

  const listVariants = {
    hidden: {},
    visible: {
      transition: reduceMotion ? {} : { staggerChildren: 0.035 },
    },
  };

  const itemVariants = {
    hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: -6 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <DialogContent
      showCloseButton={false}
      overlayClassName="top-(--header-height) bg-slate-950/55 backdrop-blur-[2px] lg:hidden"
      className="fixed inset-x-0 bottom-auto left-0 top-(--header-height) z-50 block max-h-[calc(100dvh-var(--header-height))] w-full max-w-none translate-x-0 translate-y-0 overflow-y-auto rounded-none border-x-0 border-t-0 border-border bg-background/95 px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-3 shadow-2xl shadow-black/15 backdrop-blur-xl data-[state=closed]:zoom-out-100 data-[state=open]:zoom-in-100 data-[state=closed]:slide-out-to-top-2 data-[state=open]:slide-in-from-top-2 lg:hidden"
    >
      <DialogTitle className="sr-only">Navigation</DialogTitle>
      <DialogDescription className="sr-only">
        Main navigation and display preferences
      </DialogDescription>
      <nav id="mobile-navigation" aria-label="Main navigation">
        <motion.ul
          variants={listVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-2 pb-6"
        >
          {LINKS.map((link) => {
            const isContact = link.href === "contacts";
            return (
              <motion.li variants={itemVariants} key={link.href} className="w-full">
                <SmoothLink
                  onClick={closeMenu}
                  to={link.href}
                  spy={!isContact}
                  className={`block w-full rounded-2xl px-4 py-3 text-left text-base transition-colors hover:bg-accent hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${isContact ? "mt-2 bg-primary text-center font-semibold text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 hover:text-primary-foreground" : ""}`}
                >
                  {t(link.href)}
                </SmoothLink>
              </motion.li>
            );
          })}
        </motion.ul>
        <div className="flex items-center justify-between border-t border-border pt-5">
          <ThemeToggle />
          <LocaleSwitcher />
        </div>
      </nav>
    </DialogContent>
  );
};
export default MobileNav;
