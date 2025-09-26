"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // for icons

const navLinks = [
  { no: 1, name: "About", href: "/about" },
  { no: 2, name: "Services", href: "/services" },
  { no: 3, name: "Our Work", href: "/work" },
  { no: 4, name: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="  absolute inset-0 z-100">
      <motion.div
        initial={{ opacity: 0, y: -80, scale: 1 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeIn",
          delay: 0.1,
        }}
        className={`md:container flex items-center justify-between 
      bg-gradient-to-r from-[#0C0C0C] via-[#1A1A1A] to-[#0C0C0C]
       px-2 h-[60px] rounded-2xl m-5
      shadow-[0_4px_20px_rgba(0,0,0,0.1)] 
      backdrop-blur-md 
      md:max-w-[650px] 
      transition-all duration-300
      ${isScrolled ? "md:fixed left-1/2 -translate-x-1/2" : "relative"}`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-[#FAFAFA] text-[28px] font-extrabold px-3"
        >
          RUKEN
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[#FAFAFA] text-[18px] font-semibold hover:text-[#EAFF00] transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Contact Button */}
        <Link
          href="/contact"
          className="hidden md:block p-4 bg-[#EAFF00] text-[#0C0C0C] rounded-md font-medium hover:bg-[#d4e600] transition"
        >
          Contact
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#FAFAFA]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </motion.div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0C0C0C] mt-2 rounded-xl shadow-lg w-full mx-auto p-4 space-y-4 ">
          {navLinks.map((link) => (
            <Link
              key={link.no}
              href={link.href}
              className="block text-[#FAFAFA] text-[18px] font-semibold hover:text-[#EAFF00] transition"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block px-3 py-2 bg-[#EAFF00] text-[#0C0C0C] rounded-md font-medium hover:bg-[#d4e600] transition"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
