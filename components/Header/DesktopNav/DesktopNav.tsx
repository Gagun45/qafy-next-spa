import SmoothLink from "@/components/General/SmoothLink/SmoothLink";
import { LINKS } from "@/lib/constants";
import { useTranslations } from "next-intl";

const DesktopNav = () => {
  const t = useTranslations("NavLinks");
  return (
    <nav>
      <ul className="hidden items-center gap-1 rounded-full border border-border/70 bg-card/55 p-1.5 shadow-sm lg:flex">
        {LINKS.map((link) => (
          <li key={link.href}>
            <SmoothLink
              className="block rounded-full px-4 py-2 text-sm transition-colors hover:bg-accent hover:text-primary"
              to={link.href}
              spy
            >
              {t(`${link.href}`)}
            </SmoothLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default DesktopNav;
