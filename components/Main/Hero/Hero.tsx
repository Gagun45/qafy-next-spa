"use client";

import Container from "@/components/General/Container/Container";
import { motion } from "framer-motion";
import HeroHeading from "./HeroHeading/HeroHeading";
import HeroCTA from "./HeroCTA/HeroCTA";

const Hero = () => {
  return (
    <section id="hero" className="bg-linear-to-b from-accent to-background">
      <Container className="min-h-[calc(100vh-24*4px)] flex flex-col items-center justify-center">
        <motion.div
          className="size-full"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <HeroHeading />
          <HeroCTA />
        </motion.div>
      </Container>
    </section>
  );
};
export default Hero;
