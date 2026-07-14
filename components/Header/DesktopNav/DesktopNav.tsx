import SmoothLink from "@/components/General/SmoothLink/SmoothLink";
import { LINKS } from "@/lib/constants";
import { useTranslations } from "next-intl";

const DesktopNav = () => {
  const t = useTranslations("NavLinks");
  return (
    <nav>
      <ul className="hidden items-center gap-1 rounded-full border border-border/70 bg-card/55 p-1.5 shadow-sm lg:flex">
        {LINKS.map((link) => {
          const isContact = link.label === "Contacts";
          return (
            <li key={link.href}>
              <SmoothLink
                className={`block rounded-full px-4 py-2 text-sm transition-colors hover:bg-accent hover:text-primary ${isContact ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 hover:bg-primary/90 hover:text-primary-foreground" : ""}`}
                to={link.href}
                spy={!isContact && true}
              >
                {t(`${link.href}`)}
              </SmoothLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default DesktopNav;
