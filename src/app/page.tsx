"use client";

import Image from "next/image";
import * as motion from "motion/react-client";
import { useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Code, SendHorizontal, Store } from "lucide-react";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import WorkSection from "@/components/portfolio/WorkSection";
import ContactSection from "@/components/portfolio/ContactSection";

export default function Home() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16); // center offset
      mouseY.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [mouseX, mouseY]);

  const box = {
    width: 100,
    height: 100,
    backgroundColor: "#ff0088",
    borderRadius: 5,
  };

  return (
    <section className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 bg-white rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{ x, y }}
      />
      {/* Section 1 */}
      <HeroSection></HeroSection>

      {/* Section 2 */}
      <WorkSection/>

      {/* Section 3 */}
      <AboutSection/>

      {/* Section 4 */}
      <ContactSection/>
    </section>
  );
}
