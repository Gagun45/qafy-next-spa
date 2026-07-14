"use client";

import Container from "@/components/General/Container/Container";
import { motion } from "framer-motion";
import HomeHeading from "./HomeHeading/HomeHeading";
import HomeCTA from "./HomeCTA/HomeCTA";
import Image from "next/image";

const Home = () => {
  return (
    <section id="home" className="isolate min-h-[calc(100svh-6rem)] overflow-hidden bg-[#07142c] py-0 text-white">
      <Image
        src="/repair-hero.webp"
        alt="Laptop, smartphone and precision repair tools on a workbench"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[62%_center] opacity-65 md:object-center md:opacity-90"
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-[#061126] via-[#061126]/95 to-[#061126]/15" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_25%_40%,rgba(31,131,255,0.22),transparent_28rem)]" />
      <Container className="min-h-[calc(100svh-6rem)] items-start justify-center py-20">
        <motion.div
          className="w-full max-w-3xl text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
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
