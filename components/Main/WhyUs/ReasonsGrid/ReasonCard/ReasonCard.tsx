import type { Reason } from "@/lib/types";
import { motion } from "framer-motion";

interface Props {
  feature: Reason;
  index: number;
}

const ReasonCard = ({ index, feature }: Props) => {
  const { desc, icon, title } = feature;
  return (
    <motion.div
      key={title}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="bg-muted rounded-2xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all ring ring-muted-foreground/25"
    >
      <div className="flex flex-col h-full items-center text-foreground text-center">
        {icon}
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm mt-auto">{desc}</p>
      </div>
    </motion.div>
  );
};
export default ReasonCard;
