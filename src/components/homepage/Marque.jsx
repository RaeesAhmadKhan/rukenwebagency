"use client";

import { motion } from "framer-motion";

const names = [
  "Next.js",
  "React.js",
  "Elementor",
  "Wordpress",
  "Wix",
  "Figma",
  "Webflow",
  "Three.js",
  "Tailwind",
  "Shopify",
  "Motion",
  "GSAP",
];

export default function InfiniteMarquee() {
  return (
    <div className="overflow-hidden w-full bg-[#0C0C0C] py-7 md:py-10 mt-20 md:mt-0">
      <motion.div
        className="flex md:space-x-10 space-x-5 whitespace-nowrap text-[#FAFAFA] font-extrabold text-2xl md:text-7xl"
        animate={{ x: ["100%", "-100%"] }} // move from right to left
        transition={{
          duration: 15,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {/* Repeat the names twice to create seamless loop */}
       {Array.from({ length: 100 }) // repeat 20x (or more)
  .flatMap(() => names)
  .map((name, index) => (
    <span key={index} className="mx-6">
      {name}
    </span>
))}
      </motion.div>
    </div>
  );
}
