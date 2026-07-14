import { useTranslations } from "next-intl";
import { ImpressumDialog } from "./ImpressumDialog/ImpressumDialog";

const FooterText = () => {
  const t = useTranslations("Footer.FooterText");
  const desc = t("desc");
  return (
    <div className="h-full space-y-4">
      <h3 className="flex items-center justify-center gap-3 text-2xl font-bold text-white md:justify-start">
        <span className="flex size-10 items-center justify-center rounded-2xl bg-primary text-sm font-black text-white shadow-lg shadow-primary/20">Q</span>
        Qafy <span className="text-primary">Mobile</span>
      </h3>
      <p className="max-w-md leading-7 text-slate-400">{desc}</p>
      <ImpressumDialog />
    </div>
  );
};
export default FooterText;
