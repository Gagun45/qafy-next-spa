import LocaleSwitcher from "@/components/General/LocaleSwitcher/LocaleSwitcher";
import ThemeToggle from "@/components/General/ThemeToggle/ThemeToggle";
import {
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { LINKS } from "@/lib/constants";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import { scroller } from "react-scroll";

interface Props {
  closeMenu: () => void;
}

const MobileNav = ({ closeMenu }: Props) => {
  const t = useTranslations("NavLinks");
  const reduceMotion = useReducedMotion();
  const pendingSection = useRef<string | null>(null);

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

  const navigateToSection = (section: string) => {
    pendingSection.current = section;
    closeMenu();
  };

  const completeNavigation = () => {
    const section = pendingSection.current;
    pendingSection.current = null;

    if (!section) return;

    window.requestAnimationFrame(() => {
      scroller.scrollTo(section, {
        smooth: true,
        duration: 100,
        offset: -96,
      });
    });
  };

  return (
    <DialogContent
      showCloseButton={false}
      onCloseAutoFocus={completeNavigation}
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
          {LINKS.map((link) => (
            <motion.li variants={itemVariants} key={link.href} className="w-full">
              <button
                type="button"
                onClick={() => navigateToSection(link.href)}
                className="block w-full cursor-pointer rounded-2xl px-4 py-3 text-left text-base font-medium transition-colors hover:bg-accent hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                {t(link.href)}
              </button>
            </motion.li>
          ))}
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
