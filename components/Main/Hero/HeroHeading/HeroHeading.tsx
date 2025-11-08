"use client";

import { motion } from "framer-motion";
import { FaTools } from "react-icons/fa";

const HeroHeading = () => {
  return (
    <>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="flex justify-center mb-6"
      >
        <FaTools className="text-5xl text-primary" />
      </motion.div>

      {/* Title */}
      <h1 className="text-4xl sm:text-6xl text-center font-bold leading-tight mb-4">
        Fast & Reliable <br />
        <span className="text-primary">PC & Phone Repair</span>
      </h1>

      {/* Subtitle */}
      <p className="text-lg sm:text-xl mb-8 text-center">
        We fix all major brands — same day service available. Trusted by
        hundreds of happy customers.
      </p>
    </>
  );
};
export default HeroHeading;
