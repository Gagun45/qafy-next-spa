import type { Reason } from "@/lib/types";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

interface Props {
  feature: Reason;
  index: number;
}

const ReasonCard = ({ index, feature }: Props) => {
  const { icon, transKey } = feature;
    const t = useTranslations("WhyUs.Reasons");
    const title = t(`${transKey}.title`);
    const desc = t(`${transKey}.desc`);
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="group rounded-3xl border border-border/80 bg-background/70 p-6 text-left shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-card md:p-7"
    >
      <div className="flex h-full items-start gap-5">
        <div className="iconTile size-12 shrink-0 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">{icon}</div>
        <div>
          <div className="microLabel numeric mb-2 text-primary/70">0{index + 1}</div>
          <h3 className="cardTitle mb-2 text-lg md:text-xl">{title}</h3>
          <p className="text-sm leading-6">{desc}</p>
        </div>
      </div>
    </motion.div>
  );
};
export default ReasonCard;
