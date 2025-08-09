import { ArrowDown, Code, SendHorizontal, Store } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import * as motion from "motion/react-client";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const HeroSection = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const [textWidth, setTextWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current && containerRef.current) {
      setTextWidth(textRef.current.offsetWidth);
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, []);

  return (
    <div className="h-screen snap-start flex flex-col items-center justify-center bg-black text-white gap-12">
      <div className="flex justify-center items-center gap-4">
        <div className="relative">
          <p className="text-2xl font-mono">Abid</p>
          <p className="font-bold lg:text-8xl text-6xl text-neutral-600 font-mono">Noman</p>
        </div>
        <div className=" overflow-hidden rounded-full bg-white w-[150] h-[150]relative">
          <Image
            src="/me-copy.png"
            className="relative z-10"
            width={160}
            height={150}
            alt="me"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-1 w-full h-[400] gap-4 md:grid-cols-4 md:grid-rows-2 px-4 md:px-0">
        <div className="flex flex-col justify-between col-span-2 row-span-2 bg-white text-black w-full rounded-4xl relative overflow-hidden whitespace-nowrap">
          <div className=""></div>
          <Carousel
            opts={{ loop: true, align: "center", skipSnaps: true }}
            plugins={[
              Autoplay({
                delay: 1500,
              }),
            ]}
          >
            <CarouselContent>
              <CarouselItem><p className="block text-black px-4 font-bold lg:text-5xl text-2xl font-mono text-center">Fullstack Developer</p></CarouselItem>
              <CarouselItem><p className="block text-black px-4 font-bold lg:text-6xl text-2xl font-mono text-center">React</p></CarouselItem>
              <CarouselItem><p className="block text-black px-4 font-bold lg:text-6xl text-2xl font-mono text-center" >Next.js</p></CarouselItem>
              <CarouselItem><p className="block text-black px-4 font-bold lg:text-6xl text-2xl font-mono text-center" >Node.js</p></CarouselItem>
              <CarouselItem><p className="block text-black px-4 font-bold lg:text-6xl text-2xl font-mono text-center" >MongoDB</p></CarouselItem>
              <CarouselItem><p className="block text-black px-4 font-bold lg:text-6xl text-2xl font-mono text-center" >Tailwind</p></CarouselItem>
              <CarouselItem><p className="block text-black px-4 font-bold lg:text-6xl text-2xl font-mono text-center" >APIs</p></CarouselItem>
              <CarouselItem><p className="block text-black px-4 font-bold lg:text-6xl text-2xl font-mono text-center" >Docker</p></CarouselItem>
            </CarouselContent>
          </Carousel>
          <div className="flex justify-between items-center px-8 py-4">
            <p className="font-mono font-bold">See all projects</p>
              <a href="#projects" className="text-black cursor-pointer text-sm">
                <ArrowDown size={24} strokeWidth={2.75} className="font-bold" />
              </a>
          </div>
        </div>
        <div className="hidden lg:block col-span-1 row-span-1 bg-white/10 backdrop-blur-md border-white/20 shadow-lg rounded-4xl lg:p-4 p-2 hover:bg-white/20 hover:shadow-xl transition text-white border w-full px-6 py-2">
          <div className="flex w-full h-full flex-col-reverse justify-start">
            <div className="flex justify-between items-center">
              <p className="font-mono text-white font-bold">Work</p>
              <a href="#projects" className="text-white cursor-pointer text-sm">
                <Code size={24} strokeWidth={2.75} className="font-bold" />
              </a>
            </div>
          </div>
        </div>
        <div className="block lg:hidden col-span-1 row-span-1 bg-white/10 backdrop-blur-md border-white/20 shadow-lg rounded-4xl lg:p-4 p-2 hover:bg-white/20 hover:shadow-xl transition text-white border w-full px-6 py-2">
          <div className="flex w-full h-full flex-col-reverse justify-start">
            <div className="flex justify-between items-center">
              <p className="font-mono text-white font-bold">Work</p>
              <a href="#work" className="text-white cursor-pointer text-sm">
                <Code size={24} strokeWidth={2.75} className="font-bold" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-1 row-span-1 bg-gray-600 w-full rounded-4xl px-6 py-2">
          <div className="flex w-full h-full flex-col-reverse justify-start">
            <div className="flex justify-between items-center">
              <p className="font-mono text-white font-bold">About</p>
              <a href="#about" className="text-white cursor-pointer text-sm">
                <Store size={24} strokeWidth={2.75} className="font-bold" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-2 row-span-1 bg-gray-800 w-full rounded-4xl px-6 py-2">
          <div className="flex w-full h-full flex-col-reverse justify-start">
            <div className="flex justify-between items-center">
              <p className="font-mono text-white font-bold">Contact Us</p>
              <a href="#contact" className="text-white cursor-pointer text-sm">
                <SendHorizontal
                  size={24}
                  strokeWidth={2.75}
                  className="font-bold"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
