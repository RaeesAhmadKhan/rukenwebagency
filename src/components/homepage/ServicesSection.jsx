"use client";

import { motion } from "framer-motion";

const ServicesList = [
  {
    Title: "WEB DESIGN",
    Numb: 1,
    desc: [
      "Custom Website Design",
      "Figma & UI/UX Design",
      "Responsive Website",
      "Landing Page Design",
    ],
  },
  {
    Title: "DIGITAL MARKETING",
    Numb: 2,
    desc: ["Google Ads", "Meta Ads", "Original SEO", "Social Media Ads"],
  },
  {
    Title: "CUSTOM WEBSITE",
    Numb: 3,
    desc: [
      "Customized Web App",
      "Website in Next.js",
      "CMS",
      "3D Vectors",
      "Custom Graphics",
    ],
  },
  {
    Title: "WEBSITE MAINTAINENCE",
    Numb: 4,
    desc: [
      "Security Updates",
      "Performance Check",
      "Backup & Recovery",
      "Bug Fixes",
    ],
  },
  {
    Title: "WEB HOSTING",
    Numb: 5,
    desc: ["99% Uptime", "Fast-Loading","👍 Pricing","Regular Backups", ],
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
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 1 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.3,
            }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <div
              key={list.Numb}
              className="relative group transition border-b border-gray-700 p-5 md:p-1 text-center md:flex justify-between items-center text-[#fafafa]
                    hover:text-8xl 
                    transition duration-100 ease-in-out"
            >
              <p className="text-4xl  md:text-5xl lg:text-7xl font-extrabold text-start px-5">
                {list.Title}
              </p>
              <div className="flex flex-wrap space-x-2 group-hover:space-x-8 group-hover:space-y-4 space-y-2 md:max-w-xl md:p-5 p-3 m-5 w-fit">
                {list.desc.map((item, index) => (
                  <div
                    key={index}
                    className="p-2 bg-[#EAFF00]
                  text-[#0C0C0C] font-medium w-fit h-fit text-xl rounded-md text-start transform transition-all duration-500 
              group-hover:scale-110 "
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
