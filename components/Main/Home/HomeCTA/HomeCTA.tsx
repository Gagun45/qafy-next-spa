import SmoothLink from "@/components/General/SmoothLink/SmoothLink";
import { buttonVariants } from "@/components/ui/button";
import WidgetTrigger from "@/components/Widget/WidgetTrigger";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const HomeCTA = () => {
  const t = useTranslations("Home.HomeCTA");
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="flex flex-col sm:flex-row gap-4 items-center justify-center"
    >
      <WidgetTrigger className="ctaBtn" />
      <SmoothLink
        to="contacts"
        className={buttonVariants({
          className: "ctaBtn",
          variant: "secondary",
        })}
      >
        {t("secondaryCTA")}
      </SmoothLink>
    </motion.div>
  );
};
export default HomeCTA;
