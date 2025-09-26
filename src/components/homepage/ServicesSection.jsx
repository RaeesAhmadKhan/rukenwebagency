"use client"

import { motion } from "framer-motion";

const ServicesList = [
  {
    Title: "WEB DESIGN",
    Numb: 1,
    desc: [
      "Custom Website Design",
      "Figma & UI/UX Design",
      "Responsive Web Development",
      "Landing Page Design",
    ],
  },
  {
    Title: "DIGITAL MARKETING",
    Numb: 2,
    desc: [
      "Google Ads",
      "Meta Ads",
      "Original SEO",
      "Social Media Ads",
    ],
  },
  {
    Title: "CUSTOM WEBSITE",
    Numb: 3,
    desc: [
      "Customize Web App",
      "Website in Next.js",
      "Easy to use CMS",
      "Custom Graphics & 3D Elements",
    ],
  },
  {
    Title: "WEBSITE MAINTAINENCE",
    Numb: 4,
    desc: [
       "Regular Security Updates",
  "Performance Monitoring",
  "Backup & Recovery Solutions",
  "Bug Fixes",
    ],
  },
];

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
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function ServicesSection() {
  return (
    <section className="flex flex-col  md:py-40  py-10 overflow-hidden bg-[#0c0c0c]">
      <h2 className="font-extrabold md:text-8xl text-5xl text-[#fafafa] md:p-10 p-5 md:text-end text-center mb-20">
        OUR SERVICES
      </h2>
      <div>
        {ServicesList.map((list) => (
          <motion.div initial={{ opacity: 0, y: 80, scale: 1 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.3,
              }}
              viewport={{ once: true, amount: 0.4 }}>
          <div
            key={list.Numb}
            className="relative group transition border-b border-gray-700 p-5 md:p-1 text-center md:flex justify-between items-center text-[#fafafa]
                    hover:text-8xl 
                    transition duration-100 ease-in-out"
          >
            <p className="text-4xl  md:text-5xl lg:text-7xl font-extrabold text-start px-5">{list.Title}</p>
            <div className="flex flex-wrap space-x-2 space-y-2 md:max-w-xl md:p-7 p-3 m-5 w-fit">
              {list.desc.map((item, index) => (
                <div
                  key={index}
                  className="p-2 bg-[#EAFF00]
                  text-[#0C0C0C] font-medium w-fit h-fit text-xl rounded-md text-start"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
