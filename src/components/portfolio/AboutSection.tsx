import { Circle, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <section className="h-screen snap-start bg-black text-white lg:px-8 py-8 px-2" id="about">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="lg:basis-[50%] hidden lg:block">
          <p className="text-sm font-mono font-bold">../About me ...</p>
        </div>
        <div className="font-sans text-sm lg:text-lg font-light lg:basis-[50%] basis-full lg:text-left text-center">
          <p>
            Hello! I'm Abid, I'm a{" "}
            <strong className="font-bold text-md lg:text-xl">Fullstack developer</strong>.
          </p>
          <p>
            More than <strong className="font-bold text-md lg:text-xl">5 years</strong>{" "}
            experience
          </p>
        </div>
      </div>
      <div className="w-full relative mt-4">
        <Image
          src="/circle.svg"
          alt="circle"
          width={700}
          height={100}
          className="absolute right-[-400] -z-0 top-[-50] lg:block hidden"
        ></Image>

        <div className="flex justify-between z-10 relative">
          <div className="lg:basis-[40%] basis-full">
            <div className="bg-white py-4 px-4 rounded-4xl">
              <p className="text-black font-sans font-bold mb-2">Frontend</p>
              <p className="text-black font-mono text-xs lg:text-sm">
                Typescript / React / Next.js / Redux Toolkit / Vue / Pinia /
                Clerk / Jest / GraphQL
              </p>
            </div>
            <div className="flex">
              <div className="bg-black py-4 px-4 rounded-4xl my-2 border-2 border-white basis-[70%]">
                <p className="text-white font-sans font-bold mb-2">Styles</p>
                <p className="text-white font-mono text-xs lg:text-sm">
                  SCSS / SASS / Tailwind / MUI / ShadCn / Pinia / Tailwind /
                  Jest / GraphQL
                </p>
              </div>
              <div className="flex justify-center items-center basis-[30%] gap-2">
                <a href="https://github.com/bwithnomi" target="_blank"><Github/></a>
                <a href="https://www.linkedin.com/in/bwithnomi/" target="_blank"><Linkedin/></a>
              </div>
            </div>
            <div className="bg-black py-4 px-4 rounded-4xl my-2 border-2 border-white w-full">
              <p className="text-white font-sans font-bold mb-2">Backend</p>
              <p className="text-white font-mono text-xs lg:text-sm">
                Node.js / Nest.js / Express.js / Laravel / PHP / PostgreSQL /
                MySql / Drizzle / MongoDB / gRPC / Redis / Kafka / Microservices
              </p>
            </div>
            <div className="flex justify-between">
              <div className="bg-black py-4 rounded-4xl my-2 basis-[50%] flex flex-col justify-center">
                <p className="text-white font-sans text-xs lg:text-sm">Some of my <strong>favorite technologies, topic and tools</strong> that i worked with</p>
              </div>
              <div className="bg-black py-4 px-4 rounded-4xl my-2 border-2 border-white basis-[40%]">
                <p className="text-white font-sans font-bold mb-2">DevOps</p>
                <p className="text-white font-mono text-xs lg:text-sm">
                  Ngnix / Docker / K8s / AWS
                </p>
              </div>
            </div>
          </div>
          <div className="lg:basis-auto lg:block hidden">
            <Image
              src="/profile.png"
              alt="profile"
              width={500}
              height={400}
              className="filter grayscale"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
