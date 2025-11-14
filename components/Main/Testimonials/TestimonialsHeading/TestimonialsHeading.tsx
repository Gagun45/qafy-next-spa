'use client'

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const TestimonialsHeading = () => {
  const t = useTranslations("Testimonials.TestimonialsHeading");
  const title = t("title");
  const subtitle = t("subtitle");
  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="sectionSubtitle"
      >
        {subtitle}
      </motion.p>
    </>
  );
};
export default TestimonialsHeading;
