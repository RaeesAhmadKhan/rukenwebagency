"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ContactForm from "../contactform/contactform";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Our Work", href: "/work" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

export default function WebFooter() {
  return (
    <>
      {/* Tablet & Desktop Footer */}
      <section className="hidden lg:flex flex-col">
        {/* Contact Section */}
        <div className="flex p-10 justify-center items-center bg-[#A240E9] py-40">
          <div className="w-1/2 max-w-2xl leading-[75px]">
            <motion.h2
              initial={{ opacity: 0, y: 80, scale: 1 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.1,
              }}
              viewport={{ once: true, amount: 0.4 }}
              className="font-extrabold text-8xl text-[#0c0c0c]"
            >
              LET’S DISCUSS YOUR PROJECT
            </motion.h2>
          </div>
          <div className="w-1/2">
          <motion.div initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
      viewport={{ once: true, amount: 0.4 }}>
            <ContactForm />
          </motion.div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="flex flex-col justify-between px-10 bg-[#0C0C0C] pt-20 gap-40">
          {/* Socials */}
          <div className="flex justify-between">
            <motion.p 
            initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.1}}
      viewport={{ once: true, amount: 0.4 }}
            className="font-extrabold text-5xl text-[#FAFAFA] hover:text-[#EAFF00]">
              INSTAGRAM
            </motion.p>
            <motion.p 
            initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
      viewport={{ once: true, amount: 0.4 }}
            className="font-extrabold text-5xl text-[#FAFAFA] hover:text-[#EAFF00]">
              YOUTUBE
            </motion.p>
            <motion.p 
            initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
      viewport={{ once: true, amount: 0.4 }}
            className="font-extrabold text-5xl text-[#FAFAFA] hover:text-[#EAFF00]">
              TIKTOK
            </motion.p>
          </div>

          {/* Navigation Links */}
          <div>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <motion.div initial={{ opacity: 0, y: 80, scale: 1 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.1,
              }}
              viewport={{ once: true, amount: 0.4 }}>
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[#FAFAFA] text-3xl font-semibold hover:text-[#EAFF00] transition"
                >
                  {link.name}
                </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Branding */}
          <div className="flex justify-between items-center mb-5">
            <Link
              href="/home"
              className="font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-[150px] xl:text-[180px] text-[#FAFAFA]"
            >
              RUKEN
            </Link>
            <span className="font-medium text-3xl text-[#FAFAFA]">©2023</span>
          </div>
        </div>
      </section>

      {/* Mobile Footer */}
      <section className="lg:hidden">
        {/* Contact Section */}
        <div className="flex flex-wrap p-5 justify-center items-center bg-[#A240E9] py-10">
          <div className="leading-[65px] py-10">
            <motion.h2
              initial={{ opacity: 0, y: 80, scale: 1 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.1,
              }}
              viewport={{ once: true, amount: 0.4 }}
              className="font-extrabold text-7xl text-[#0c0c0c]"
            >
              LET’S DISCUSS YOUR PROJECT
            </motion.h2>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>

        {/* Footer Section */}
        <div className="flex flex-col gap-12 px-6 bg-[#0C0C0C] py-2">
          {/* Socials */}
          <div className="flex justify-between mt-10">
            <motion.p 
            initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
      viewport={{ once: true, amount: 0.4 }} className="font-extrabold text-lg text-[#FAFAFA] hover:text-[#EAFF00]">
              INSTAGRAM
            </motion.p>
            <motion.p 
            initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
      viewport={{ once: true, amount: 0.4 }} className="font-extrabold text-lg text-[#FAFAFA] hover:text-[#EAFF00]">
              YOUTUBE
            </motion.p>
            <motion.p 
            initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      viewport={{ once: true, amount: 0.4 }} className="font-extrabold text-lg text-[#FAFAFA] hover:text-[#EAFF00]">
              TIKTOK
            </motion.p>
          </div>

          {/* Navigation Links */}
          <div>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <motion.div initial={{ opacity: 0, y: 80, scale: 1 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.1,
              }}
              viewport={{ once: true, amount: 0.4 }}>
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#FAFAFA] text-xl font-semibold hover:text-[#EAFF00] transition"
                >
                  {link.name}
                </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Branding */}
          <div className="flex justify-between items-center">
            <Link
              href="/home"
              className="font-extrabold text-6xl sm:text-7xl md:text-8xl lg:text-[150px] xl:text-[180px] text-[#FAFAFA]"
            >
              RUKEN
            </Link>
            <span className="font-medium text-xl text-[#FAFAFA]">©2023</span>
          </div>
        </div>
      </section>
    </>
  );
}
