"use client";

import NetworkBackground from "@/components/threejs/threejs";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
   <section className="py-28 md:py-40 p-5 relative min-h-screen">
  <NetworkBackground />
  <div className="flex flex-col gap-40 md:gap-40 lg:gap-50">
    <motion.h1
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      className="font-extrabold text-4xl leading-[42px] md:text-5xl md:leading-[45px] lg:text-6xl lg:leading-[60px] text-[#0C0C0C] max-w-4xl md:max-w-2xl"
    >
      THE WEB DESIGN AGENCY THAT YOUR BUSINESS NEEDS
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
      className="font-extrabold text-xl md:text-2xl lg:text-3xl text-[#0C0C0C] text-center"
    >
      MODERN. BOLD. UNFORGETTABLE.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
      className="flex justify-end"
    >
      <div className="flex border border-black w-fit rounded-md">
        <p className="p-3 bg-[#EAFF00] text-[#0C0C0C]">Since 2023</p>
        <p className="p-3 bg-[#0C0C0C] text-[#FAFAFA]">Present</p>
      </div>
    </motion.div>
  </div>
</section>

  );
}
