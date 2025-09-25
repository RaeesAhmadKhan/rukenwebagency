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
      <section className="hidden md:flex flex-col">
        {/* Contact Section */}
        <div className="flex p-10 justify-center items-center bg-[#A240E9]">
          <div className="w-1/2 max-w-2xl leading-[75px]">
            <motion.h2
              initial={{ opacity: 0, y: 80, scale: 1 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 1,
                ease: "easeOut",
                delay: 0.3,
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="font-extrabold text-8xl text-[#0c0c0c]"
            >
              LET’S DISCUSS YOUR PROJECT
            </motion.h2>
          </div>
          <div className="w-1/2 flex">
            <ContactForm />
          </div>
        </div>

        {/* Footer Section */}
        <div className="flex flex-col gap-20 px-10 bg-[#0C0C0C] py-20">
          {/* Socials */}
          <div className="flex justify-between">
            <p className="font-extrabold text-5xl text-[#FAFAFA] hover:text-[#EAFF00]">
              INSTAGRAM
            </p>
            <p className="font-extrabold text-5xl text-[#FAFAFA] hover:text-[#EAFF00]">
              YOUTUBE
            </p>
            <p className="font-extrabold text-5xl text-[#FAFAFA] hover:text-[#EAFF00]">
              TIKTOK
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#FAFAFA] text-3xl font-semibold hover:text-[#EAFF00] transition"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Branding */}
          <div className="flex justify-between items-center">
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
      <section className="md:hidden">
        {/* Contact Section */}
        <div className="flex flex-wrap p-5 justify-center items-center mt-10 bg-[#A240E9]">
          <div className="leading-[65px] py-5">
            <motion.h2
              initial={{ opacity: 0, y: 80, scale: 1 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 1,
                ease: "easeOut",
                delay: 0.3,
              }}
              viewport={{ once: true, amount: 0.5 }}
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
        <div className="flex flex-col gap-10 px-6 bg-[#0C0C0C] py-10">
          {/* Socials */}
          <div className="flex justify-between">
            <p className="font-extrabold text-xl text-[#FAFAFA] hover:text-[#EAFF00]">
              INSTAGRAM
            </p>
            <p className="font-extrabold text-xl text-[#FAFAFA] hover:text-[#EAFF00]">
              YOUTUBE
            </p>
            <p className="font-extrabold text-xl text-[#FAFAFA] hover:text-[#EAFF00]">
              TIKTOK
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#FAFAFA] text-xl font-semibold hover:text-[#EAFF00] transition"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Branding */}
          <div className="flex justify-between items-center">
            <Link
              href="/home"
              className="font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-[150px] xl:text-[180px] text-[#FAFAFA]"
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
