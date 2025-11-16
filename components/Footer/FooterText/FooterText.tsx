import { useTranslations } from "next-intl";
import { ImpressumDialog } from "./ImpressumDialog/ImpressumDialog";

const FooterText = () => {
  const t = useTranslations("Footer.FooterText");
  const desc = t("desc");
  return (
    <div className="h-full space-y-4">
      <h3 className="text-2xl font-bold">Qafy Mobile</h3>
      <p>{desc}</p>
      <ImpressumDialog />
    </div>
  );
};
export default FooterText;
