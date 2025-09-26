"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const sentence =
  "Ruken specializes in creating websites that don't just look stunning — they convert, engage, and elevate your brand to new heights in the digital landscape.".split(
    " "
  );

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.09 },
  },
};

const wordAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

export default function AboutSection() {
  return (
      <section className="bg-white md:p-10 p-5 z-100 gap-10 md:gap-30 my-40">
  <div className="flex items-center justify-center py-20">
    <motion.h2
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      viewport={{ once: true, amount: 0.6 }}
      className="font-extrabold text-5xl md:text-6xl lg:text-7xl text-[#0C0C0C]"
    >
      ABOUT RUKEN
    </motion.h2>
  </div>

  <div className="flex flex-col justify-center items-center gap-20 md:gap-30">
    <motion.p
      className="flex flex-wrap font-bold text-gray-800
                 text-4xl leading-[37px] max-w-4xl
                 md:text-6xl md:leading-[60px] 
                 lg:text-7xl lg:leading-[75px]"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
    >
      {sentence.map((word, index) => (
        <motion.span
          key={index}
          className="mr-2 inline-block"
          variants={wordAnimation}
        >
          {word}
        </motion.span>
      ))}
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
    >
      <Link
        href="/about"
        className="font-medium text-base bg-[#EAFF00] border border-black p-4 w-fit rounded-md"
      >
        LEARN MORE ABOUT US
      </Link>
    </motion.div>
  </div>
</section>

  );
}
