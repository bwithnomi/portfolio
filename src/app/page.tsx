"use client";

import Image from "next/image";
import * as motion from "motion/react-client";
import { useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Code, SendHorizontal, Store } from "lucide-react";

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
      <div className="h-screen snap-start flex flex-col items-center justify-center bg-black text-white gap-12">
        <p className="relative">
          <p className="text-2xl">Abid</p>
          <p className="font-bold text-8xl text-orange-500">Noman</p>
        </p>
        <div className="grid grid-cols-2 grid-rows-1 w-full h-[400] gap-4 md:grid-cols-4 md:grid-rows-2 px-4 md:px-0">
          <div className="flex flex-col justify-between col-span-2 row-span-2 bg-blue-700 w-full rounded-4xl relative overflow-hidden whitespace-nowrap">
            <div className=""></div>
            <motion.div
              className="block text-white px-4 font-bold text-6xl font-mono"
              style={{ x: 0 }}
              animate={{ x: ["100%", "-100%"] }}
              transition={{
                repeat: Infinity,
                duration: 10,
                ease: "linear",
              }}
              whileHover={{ animationPlayState: "paused" }}
            >
              <span>
                Fullstack Developer • React • Node.js • MongoDB • Tailwind •
                Next.js • APIs • Stripe • Docker •
              </span>
            </motion.div>
            <div className="flex justify-between items-center px-8 py-4">
              <p className="font-mono font-bold">See all services</p>
              <Button variant="link" className="text-white cursor-pointer">
                <ArrowDown size={80} strokeWidth={2.75} />
              </Button>
            </div>
          </div>
          <div className="col-span-1 row-span-1 bg-white w-full rounded-4xl px-6 py-2">
            <div className="flex w-full h-full flex-col-reverse justify-start">
              <div className="flex justify-between items-center">
                <p className="font-mono text-black font-bold">Work</p>
                <Button variant="link" className="text-black cursor-pointer">
                  <Code size={80} strokeWidth={2.75} />
                </Button>
              </div>
            </div>
          </div>
          <div className="col-span-1 row-span-1 bg-gray-800 w-full rounded-4xl px-6 py-2">
            <div className="flex w-full h-full flex-col-reverse justify-start">
              <div className="flex justify-between items-center">
                <p className="font-mono text-white font-bold">About</p>
                <Button variant="link" className="text-white cursor-pointer">
                  <Store size={32} strokeWidth={2.75} className="font-bold"/>
                </Button>
              </div>
            </div>
          </div>
          <div className="col-span-2 row-span-1 bg-yellow-300 w-full rounded-4xl px-6 py-2">
            <div className="flex w-full h-full flex-col-reverse justify-start">
              <div className="flex justify-between items-center">
                <p className="font-mono text-black font-bold">Contact Us</p>
                <Button variant="link" className="text-black cursor-pointer">
                  <SendHorizontal size={48} strokeWidth={2.75} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="h-screen snap-start flex items-center justify-center bg-gray-900 text-white text-5xl">
        Projects
      </div>

      {/* Section 3 */}
      <div className="h-screen snap-start flex items-center justify-center bg-gray-800 text-white text-5xl">
        About Me
      </div>

      {/* Section 4 */}
      <div className="h-screen snap-start flex items-center justify-center bg-gray-700 text-white text-5xl">
        Contact
      </div>
    </section>
  );
}
