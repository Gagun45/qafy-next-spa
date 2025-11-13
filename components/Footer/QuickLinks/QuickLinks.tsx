import SmoothLink from "@/components/General/SmoothLink/SmoothLink";
import { LINKS } from "@/lib/constants";
import { useTranslations } from "next-intl";

const QuickLinks = () => {
  const t = useTranslations();
  const title = t("Footer.QuickLinks.title");
  return (
    <div className="h-full">
      <h4 className="text-lg font-semibold mb-4">{title}</h4>
      <ul className="space-y-2">
        {LINKS.map((link) => (
          <li key={link.href}>
            <SmoothLink
              className="text-muted-foreground underline"
              to={link.href}
            >
              {t(`NavLinks.${link.href}`)}
            </SmoothLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default QuickLinks;
