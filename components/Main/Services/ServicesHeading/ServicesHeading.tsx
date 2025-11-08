import { motion } from "framer-motion";

const ServicesHeading = () => {
  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our <span className="text-primary">Repair Services</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="sectionSubtitle"
      >
        Whether it&apos;s a cracked screen, slow laptop, or battery issue —
        we’ll bring your device back to life quickly and professionally.
      </motion.p>
    </>
  );
};
export default ServicesHeading;
