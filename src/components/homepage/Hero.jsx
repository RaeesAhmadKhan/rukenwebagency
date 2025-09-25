"use client";

import NetworkBackground from "@/components/threejs/threejs";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className=" md:h-[90vh] py-10 md:py-50 p-5 md:py-10">
      <NetworkBackground />
      <div className="flex flex-col gap-50 md:gap-60">
        <motion.h1
          initial={{ opacity: 0, y: 80, scale: 1 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: 0.3,
          }}
          className="font-extrabold text-[45px] leading-[42px] md:text-[55px] md:leading-[52px] md:text-[84px] md:leading-[72px] text-[#0C0C0C]  max-w-4xl  md:max-w-3xl"
        >
          THE WEB DESIGN AGENCY THAT YOUR BUSINESS NEEDS
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 80, scale: 1 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: 0.5,
          }}
          className="font-extrabold text-[20px] md:text-[28px] text-[#0C0C0C] text-center"
        >
          MODERN. BOLD. UNFORGETTABLE.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 1 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: 1,
          }}
          className="flex justify-end"
        >
          <div className="flex border-1 border-black w-fit ">
            <p className="p-3 bg-[#EAFF00] text-[#0C0C0C]">Since 2023</p>
            <p className="p-3 bg-[#0C0C0C] text-[#FAFAFA]">Present</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
