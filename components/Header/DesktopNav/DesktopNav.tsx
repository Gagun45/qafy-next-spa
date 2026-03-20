import SmoothLink from "@/components/General/SmoothLink/SmoothLink";
import { LINKS } from "@/lib/constants";
import { useTranslations } from "next-intl";

const DesktopNav = () => {
  const t = useTranslations("NavLinks");
  return (
    <nav>
      <ul className="items-center gap-8 xl:gap-12 hidden lg:flex">
        {LINKS.map((link) => {
          const isContact = link.label === "Contacts";
          return (
            <li key={link.href}>
              <SmoothLink
                className={`${isContact && "border px-4 py-2 rounded-lg border-foreground bg-foreground text-background"}`}
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
