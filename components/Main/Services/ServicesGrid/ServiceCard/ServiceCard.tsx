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
      className="bg-accent rounded-2xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all ring ring-muted-foreground/25"
    >
      <div className="flex flex-col h-full text-primary items-center">
        {icon}
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm mt-auto">{desc}</p>
      </div>
    </motion.div>
  );
};
export default ServiceCard;
