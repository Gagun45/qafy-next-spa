import { useTranslations } from "next-intl";
import { ImpressumDialog } from "./ImpressumDialog/ImpressumDialog";
import LogoMark from "@/components/General/LogoMark/LogoMark";

const FooterText = () => {
  const t = useTranslations("Footer.FooterText");
  const desc = t("desc");
  return (
    <div className="h-full space-y-4">
      <h3 className="flex items-center justify-center gap-3 text-2xl font-bold text-white md:justify-start">
        <LogoMark className="drop-shadow-[0_8px_18px_rgba(37,131,255,0.25)]" />
        Qafy <span className="text-primary">Mobile</span>
      </h3>
      <p className="max-w-md leading-7 text-slate-400">{desc}</p>
      <ImpressumDialog />
    </div>
  );
};
export default FooterText;
