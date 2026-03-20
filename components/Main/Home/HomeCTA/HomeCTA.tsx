import Prices from "@/components/Prices/Prices";
import WidgetTrigger from "@/components/Widget/WidgetTrigger";
import { motion } from "framer-motion";

const HomeCTA = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="flex flex-col sm:flex-row gap-4 items-center justify-center"
    >
      <WidgetTrigger className="ctaBtn" />
      <Prices />
    </motion.div>
  );
};
export default HomeCTA;
