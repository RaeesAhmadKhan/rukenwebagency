"use client";

import NetworkBackground from "@/components/threejs/threejs";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className=" py-10 md:py-40 p-5">
      <NetworkBackground />
      <div className="flex flex-col gap-20 md:gap-60">
        <motion.h1
          initial={{ opacity: 0, y: 80, scale: 1 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.3,
          }}
          className="font-extrabold text-5xl leading-[42px] lg:text-8xl lg:leading-[78px] md:text-5xl md:leading-[65px] text-[#0C0C0C]  max-w-4xl  md:max-w-4xl"
        >
          THE WEB DESIGN AGENCY THAT YOUR BUSINESS NEEDS
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 80, scale: 1 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.5,
          }}
          className="font-extrabold text-2xl text-3xl text-[#0C0C0C] text-center"
        >
          MODERN. BOLD. UNFORGETTABLE.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 1 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 1,
          }}
          className="flex justify-end"
        >
          <div className="flex border-1 border-black w-fit rounded-md">
            <p className="p-3 bg-[#EAFF00] text-[#0C0C0C]">Since 2023</p>
            <p className="p-3 bg-[#0C0C0C] text-[#FAFAFA]">Present</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
