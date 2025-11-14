"use client";

import Container from "@/components/General/Container/Container";
import { motion } from "framer-motion";
import HomeHeading from "./HomeHeading/HomeHeading";
import HomeCTA from "./HomeCTA/HomeCTA";

const Home = () => {
  return (
    <section id="home" className="bg-linear-to-b from-accent to-background">
      <Container className="min-h-[calc(100vh-24*4px)]">
        <motion.div
          className="size-full"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <HomeHeading />
          <HomeCTA />
        </motion.div>
      </Container>
    </section>
  );
};
export default Home;
