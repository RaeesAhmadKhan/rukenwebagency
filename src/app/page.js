import HeroSection from "@/components/homepage/Hero";
import AboutSection from "@/components/homepage/About";
import InfiniteMarquee from "@/components/homepage/Marque";
import ServicesSection from "@/components/homepage/ServicesSection";
import { Section } from "lucide-react";

export const metadata = {
  title: "RUKEN - Web Design Agency",
  description:
    "RUKEN is a web design agency that builds websites to grow your business. We combine innovative design with powerful tech to drive results.",
};


export default function Home() {
  return (
    <section>
    <div>
      <HeroSection/>
      <AboutSection/>
    <InfiniteMarquee/>
    <ServicesSection/>
    </div>
    </section>
  );
}
