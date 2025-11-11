import { motion } from "framer-motion";

const TestimonialsHeading = () => {
  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        What Our Clients Say
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="max-w-2xl mx-auto"
      >
        Real feedback from people who trusted us with their devices.
      </motion.p>
    </>
  );
};
export default TestimonialsHeading;
