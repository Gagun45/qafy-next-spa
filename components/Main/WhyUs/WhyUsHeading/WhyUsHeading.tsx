import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const WhyUsHeading = () => {
  const t = useTranslations("WhyUs.WhyUsHeading");
  const title = t.rich("title", {
    primary: (chunk) => <span className="text-primary">{chunk}</span>,
  });
  const subtitle = t("subtitle");
  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="sectionSubtitle"
      >
        {subtitle}
      </motion.p>
    </>
  );
};
export default WhyUsHeading;
