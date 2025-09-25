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
    <section className="hidden lg:flex flex-col top-0 bottom-0">
      {/* Contact Section */}
      <div className="flex p-10 h-[80vh] justify-center items-center mt-43 bg-[#A240E9]">
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
            className="font-extrabold text-[90px] text-[#0c0c0c]"
          >
            LET’S DISCUSS YOUR PROJECT
          </motion.h2>
        </div>
        <div className="w-1/2 flex">
          <ContactForm />
        </div>
      </div>
      {/* Footer */}
      <div className="flex flex-col gap-20 px-10 h-[80vh] bg-[#0C0C0C]">
        <div className="flex justify-between h-1/4 py-15">
          <p className="font-extrabold text-[50px] text-[#FAFAFA] hover:text-[#EAFF00]">
            INSTAGRAM
          </p>
          <p className="font-extrabold text-[50px] text-[#FAFAFA] hover:text-[#EAFF00]">
            YOUTUBE
          </p>
          <p className="font-extrabold text-[50px] text-[#FAFAFA] hover:text-[#EAFF00]">
            TIKTOK
          </p>
        </div>
        <div className="flex h-2/4">
        <div>
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href} // or link.name
                href={link.href}
                className="text-[#FAFAFA] text-[30px] font-semibold hover:text-[#EAFF00] transition"
              >
                {link.name}
              </Link>
            ))}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center h-1/4">
          <Link
            href="/home"
            className="font-extrabold text-[180px] text-[#FAFAFA]"
          >
            RUKEN
          </Link>
          <span className="font-medium text-[20px] text-[#FAFAFA]">©2023</span>
        </div>
      </div>
    </section>


     {/* FOR MOBILE */}


    <section className="md:hidden top-0 bottom-0 overflow-hidden">
      {/* Contact Section */}
      <div className="flex flex-wrap p-5 justify-center items-center mt-43 bg-[#A240E9] ">
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
            className="font-extrabold text-[70px] text-[#0c0c0c]"
          >
            LET’S DISCUSS YOUR PROJECT
          </motion.h2>
        </div>
        <div >
          <ContactForm />
        </div>
      </div>
      {/* Footer */}
      <div className="flex flex-col gap-20 px-10 bg-[#0C0C0C]">
        <div className="flex justify-between h-1/4 py-15">
          <p className="font-extrabold text-[20px] text-[#FAFAFA] hover:text-[#EAFF00]">
            INSTAGRAM
          </p>
          <p className="font-extrabold text-[20px] text-[#FAFAFA] hover:text-[#EAFF00]">
            YOUTUBE
          </p>
          <p className="font-extrabold text-[20px] text-[#FAFAFA] hover:text-[#EAFF00]">
            TIKTOK
          </p>
        </div>
        <div className="flex h-2/4">
        <div>
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href} // or link.name
                href={link.href}
                className="text-[#FAFAFA] text-[20px] font-semibold hover:text-[#EAFF00] transition"
              >
                {link.name}
              </Link>
            ))}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center h-1/4">
          <Link
            href="/home"
            className="font-extrabold text-[60px] text-[#FAFAFA]"
          >
            RUKEN
          </Link>
          <span className="font-medium text-[20px] text-[#FAFAFA]">©2023</span>
        </div>
      </div>
    </section>
    </>
  );
}
