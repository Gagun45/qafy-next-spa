import SmoothLink from "@/components/General/SmoothLink/SmoothLink";
import Prices from "@/components/Prices/Prices";
import WidgetTrigger from "@/components/Widget/WidgetTrigger";
import { motion } from "framer-motion";
import { ArrowRight, Clock3, ShieldCheck, Wrench } from "lucide-react";
import { useTranslations } from "next-intl";

const HomeCTA = () => {
  const t = useTranslations("WhyUs.Reasons");
  const buttonTrans = useTranslations("Home.HomeCTA");
  const proofPoints = [
    { icon: ShieldCheck, label: t("warranty.title") },
    { icon: Clock3, label: t("fast.title") },
    { icon: Wrench, label: t("quality.title") },
  ];
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex max-w-xl flex-col items-stretch gap-4 sm:flex-row"
      >
        <WidgetTrigger className="ctaBtn" />
        <Prices />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65 }}
        className="mt-5"
      >
        <SmoothLink
          to="contacts"
          className="group inline-flex items-center gap-2.5 rounded-full border border-blue-300/25 bg-blue-400/10 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_12px_32px_-18px_rgba(59,130,246,0.85)] backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-blue-300/50 hover:bg-blue-400/15 hover:shadow-[0_16px_36px_-18px_rgba(59,130,246,1)]"
        >
          {buttonTrans("contactCTA")}
          <ArrowRight className="size-4 text-blue-200 transition-transform group-hover:translate-x-1 group-hover:text-white" />
        </SmoothLink>
      </motion.div>
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75 }}
        className="mt-7 flex max-w-2xl flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300"
      >
        {proofPoints.map(({ icon: Icon, label }) => (
          <li key={label} className="flex items-center gap-2">
            <Icon className="size-4 text-blue-300" />
            {label}
          </li>
        ))}
      </motion.ul>
    </>
  );
};
export default HomeCTA;
