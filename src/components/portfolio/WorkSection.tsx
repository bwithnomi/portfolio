import React from "react";
import { Button } from "../ui/button";

const WorkSection = () => {
  return (
    <section
      className="h-screen snap-start bg-black text-white lg:px-8 px-4 py-4 lg:hidden block"
      id="work"
    >
      <div className="">
        <p className="lg:text-8xl lg:text-right text-center text-4xl font-mono">
          Work
        </p>

        <div className="flex lg:flex-row flex-col justify-between flex-wrap">
          <div className="basis-full">
            <div className="border-b border-white py-4">
              <div className="gap-2">
                <div className="flex justify-between">
                  <p className="">
                    <p className="text-lg font-sans text-gray-500 font-bold">
                      2022
                    </p>
                    <p className="text-sm font-sans text-gray-300">3Y 2Ms</p>
                  </p>

                  <p className="basis-[60%]">
                    <p className="font-bold">Developers Studio</p>
                    <p>
                      Senior Software Engineer
                    </p>
                    <p className="text-sm text-slate-400 font-mono">Node.js, Vue.js, Blockchain</p>
                  </p>
                </div>
              </div>
            </div>
            <div className="border-b border-white py-4">
              <div className="gap-2">
                <div className="flex justify-between">
                  <p className="">
                    <p className="text-lg font-sans text-gray-500 font-bold">
                      2022
                    </p>
                    <p className="text-sm font-sans text-gray-300">6Ms</p>
                  </p>

                  <p className=" basis-[60%]">
                    <p className="font-bold">UGA1TECH</p>
                    <p>
                      Senior Software Engineer
                    </p>
                    <p className="text-sm text-slate-400 font-mono">Laravel, Vue.js, PostgreSQL</p>
                  </p>
                </div>
              </div>
            </div>
            <div className="border-b border-white py-4">
              <div className="gap-2">
                <div className="flex justify-between">
                  <p className="">
                    <p className="text-lg font-sans text-gray-500 font-bold">
                      2021
                    </p>
                    <p className="text-sm font-sans text-gray-300">6Ms</p>
                  </p>

                  <p className=" basis-[60%]">
                    <p className="font-bold">TechHive</p>
                    <p>
                      Fullstack Software Engineer
                    </p>
                    <p className="text-sm text-slate-400 font-mono">Laravel, Vue.js, PostgreSQL</p>
                  </p>
                </div>
              </div>
            </div>
            <div className="border-b border-white py-4">
              <div className="gap-2">
                <div className="flex justify-between">
                  <p className="">
                    <p className="text-lg font-sans text-gray-500 font-bold">
                      2019
                    </p>
                    <p className="text-sm font-sans text-gray-300">2Y 1M</p>
                  </p>

                  <p className="basis-[60%]">
                    <p  className="font-bold">WTechSols</p>
                    <p>
                      Software Engineer
                    </p>
                    <p className="text-sm text-slate-400 font-mono">PhP, MySQL, JQuery, HTML, CSS</p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
