import { useTranslations } from "next-intl";

const FooterText = () => {
  const t = useTranslations("Footer.FooterText");
  const desc = t("desc");
  return (
    <div className="h-full">
      <h3 className="text-2xl font-bold mb-3">Qafy Mobile</h3>
      <p>{desc}</p>
    </div>
  );
};
export default FooterText;
