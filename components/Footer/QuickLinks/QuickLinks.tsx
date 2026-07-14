import SmoothLink from "@/components/General/SmoothLink/SmoothLink";
import { LINKS } from "@/lib/constants";
import { useTranslations } from "next-intl";

const QuickLinks = () => {
  const t = useTranslations();
  const title = t("Footer.QuickLinks.title");
  return (
    <div className="h-full">
      <h4 className="microLabel mb-5 text-slate-500">{title}</h4>
      <ul className="space-y-3">
        {LINKS.map((link) => (
          <li key={link.href}>
            <SmoothLink
              className="text-sm text-slate-400 transition-colors hover:text-white"
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
