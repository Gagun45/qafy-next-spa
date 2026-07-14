import Prices from "@/components/Prices/Prices";
import WidgetTrigger from "@/components/Widget/WidgetTrigger";
import { motion } from "framer-motion";
import { Clock3, ShieldCheck, Wrench } from "lucide-react";
import { useTranslations } from "next-intl";

const HomeCTA = () => {
  const t = useTranslations("WhyUs.Reasons");
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
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75 }}
        className="mt-8 flex max-w-2xl flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300"
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
