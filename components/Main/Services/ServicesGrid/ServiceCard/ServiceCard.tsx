import type { Service } from "@/lib/types";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

interface Props {
  service: Service;
  index: number;
}

const ServiceCard = ({ index, service }: Props) => {
  const { icon, transKey } = service;
  const t = useTranslations("Services.Services");
  const title = t(`${transKey}.title`);
  const desc = t(`${transKey}.desc`);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: index * 0.15 }}
      viewport={{ once: true }}
      className={`surfaceCard group min-h-64 overflow-hidden p-7 text-left transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_24px_70px_-38px_rgba(37,131,255,0.55)] md:p-9 ${index === 0 || index === 3 ? "lg:col-span-2" : ""}`}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="flex h-full flex-col items-start">
        <div className="iconTile mb-8 transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-2">{icon}</div>
        <h3 className="cardTitle mb-3 text-xl md:text-2xl">{title}</h3>
        <p className="max-w-xl text-sm leading-6 md:text-base">{desc}</p>
        <span className="numeric mt-auto pt-7 text-4xl font-black tracking-[-0.04em] text-primary/10">0{index + 1}</span>
      </div>
    </motion.div>
  );
};
export default ServiceCard;
