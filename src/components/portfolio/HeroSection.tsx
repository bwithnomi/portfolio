import { ArrowDown, Code, SendHorizontal, Store } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import * as motion from "motion/react-client";

const HeroSection = () => {
  return (
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
              <a href="#work" className="text-black cursor-pointer text-sm">
                <Code size={24} strokeWidth={2.75} className="font-bold" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-1 row-span-1 bg-gray-800 w-full rounded-4xl px-6 py-2">
          <div className="flex w-full h-full flex-col-reverse justify-start">
            <div className="flex justify-between items-center">
              <p className="font-mono text-white font-bold">About</p>
              <a href="#about" className="text-white cursor-pointer text-sm">
                <Store size={24} strokeWidth={2.75} className="font-bold" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-2 row-span-1 bg-yellow-300 w-full rounded-4xl px-6 py-2">
          <div className="flex w-full h-full flex-col-reverse justify-start">
            <div className="flex justify-between items-center">
              <p className="font-mono text-black font-bold">Contact Us</p>
              <a href="#contact" className="text-black cursor-pointer text-sm">
                <SendHorizontal size={24} strokeWidth={2.75} className="font-bold" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
