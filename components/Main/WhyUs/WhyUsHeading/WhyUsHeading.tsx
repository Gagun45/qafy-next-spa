import { motion } from "framer-motion";

const WhyUsHeading = () => {
  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Why <span className="text-primary">Choose Us</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="sectionSubtitle"
      >
        With years of experience and a passion for technology, we provide the
        best repair service in town — fast, reliable, and transparent.
      </motion.p>
    </>
  );
};
export default WhyUsHeading;
