"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const sentence =
  "Ruken specializes in creating websites that don't just look stunning — they convert, engage, and elevate your brand to new heights in the digital landscape.".split(
    " "
  );

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // delay between words
    },
  },
};

const wordAnimation = {
  hidden: { opacity: 0, y: 20, scale: 1 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function AboutSection() {
  return (
    <>
    <section className="hidden md:flex h-[95vh] flex bg-white p-10 z-100 gap-20 overflow-hidden">
      <div className="md:w-1/2 flex items-center justify-center">
        <motion.h2
          initial={{ opacity: 0, y: 80, scale: 1 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.3,
          }}
          viewport={{ once: true, amount: 0.6 }}
          className="font-extrabold text-6xl text-[#0C0C0C]"
        >
          ABOUT RUKEN
        </motion.h2>
      </div>
      <div className="flex flex-col justify-center w-1/2 gap-35">
        <motion.p
          className="font-bold lg:text-7xl md:text-6xl lg:leading-[75px] md:leading-[60px] text-gray-800 flex flex-wrap"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
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
          initial={{ opacity: 0, y: 80, scale: 1 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: 0.3,
          }}
        >
          <Link
            href="/about"
            className="font-medium text-base bg-[#EAFF00] border-1 border-black p-4 text-start w-fit"
          >
            LEARN MORE ABOUT US
          </Link>
        </motion.div>
      </div>
    </section>


    {/* FOR MOBILE */}
    <section className=" lg:hidden md:hidden xl:hidden flex flex-wrap bg-white p-10  z-100 gap-20">
      <div className="flex items-center justify-center">
        <motion.h2
          initial={{ opacity: 0, y: 80, scale: 1 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.3,
          }}
          viewport={{ once: true, amount: 0.6 }}
          className="font-extrabold text-4xl text-[#0C0C0C]"
        >
          ABOUT RUKEN
        </motion.h2>
      </div>
      <div className="flex flex-col justify-center gap-20">
        <motion.p
          className="font-bold text-4xl leading-[37px] text-gray-800 flex flex-wrap"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
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
          initial={{ opacity: 0, y: 80, scale: 1 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: 0.3,
          }}
        >
          <Link
            href="/about"
            className="font-medium text-base bg-[#EAFF00] border-1 border-black p-4 text-start w-fit"
          >
            LEARN MORE ABOUT US
          </Link>
        </motion.div>
      </div>
    </section>
    </>
  );
}
