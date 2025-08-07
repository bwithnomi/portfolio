import React from "react";
import { Button } from "../ui/button";

const WorkSection = () => {
  return (
    <section
      className="h-screen snap-start bg-black text-white lg:px-8 px-4 py-4"
      id="work"
    >
      <div className="">
        <p className="lg:text-8xl lg:text-right text-center text-2xl font-mono hidden lg:block">
          Work
        </p>
        <p className="lg:text-8xl lg:text-right text-center text-2xl font-mono lg:hidden block">
          Projects
        </p>

        <div className="flex lg:flex-row flex-col justify-between flex-wrap">
          <div className="flex lg:flex-row flex-row flex-wrap justify-start mt-8 gap-2 lg:basis-[50%] basis-full lg:w-[50%] w-full">
            <div className="bg-black border border-white lg:p-4 p-2 rounded-lg lg:basis-auto basis-auto w-auto lg:w-auto">
              <p className="font-bold lg:text-lg text-md text-center font-sans">
                WEB3 Audio player
              </p>
              <p className="font-mono lg:text-sm text-xs text-center">
                Solana | Rust | React
              </p>
            </div>
            <div className="bg-orange-500 lg:p-4 p-2 rounded-lg lg:basis-auto basis-auto w-auto lg:w-auto">
              <p className="font-bold lg:text-lg text-md text-center font-sans">
                E-Commerce Pet Store
              </p>
              <p className="font-mono lg:text-sm text-xs text-center">
                Laravel | Vue.js | MySql
              </p>
            </div>
            <div className="bg-gray-600 lg:p-4 p-2 rounded-lg lg:basis-auto basis-auto w-auto lg:w-auto">
              <p className="font-bold lg:text-lg text-md text-center font-sans">
                Hospital Management system
              </p>
              <p className="font-mono lg:text-sm text-xs text-center">
                Laravel | Vue.js | PostgreSQL
              </p>
            </div>
            <div className="bg-yellow-300 lg:p-4 p-2 rounded-lg lg:basis-auto basis-auto w-auto lg:w-auto text-black">
              <p className="font-bold lg:text-lg text-md text-center font-sans">
                Lawyer App
              </p>
              <p className="font-mono lg:text-sm text-xs text-center">
                Node.js | Vue.js | MongoDb
              </p>
            </div>
            <div className="bg-blue-700 lg:p-4 p-2 rounded-lg lg:basis-auto basis-auto w-auto lg:w-auto">
              <p className="font-bold lg:text-lg text-md text-center font-sans">
                NFT Marketplace
              </p>
              <p className="font-mono lg:text-sm text-xs text-center">
                Laravel | Vue.js | MongoDB
              </p>
            </div>
            <div className="bg-black border border-white lg:p-4 p-2 rounded-lg lg:basis-auto basis-auto w-auto lg:w-auto">
              <p className="font-bold lg:text-lg text-md text-center font-sans">
                Decentralyzed KYC
              </p>
              <p className="font-mono lg:text-sm text-xs text-center">
                Ethereum | Node.js | Vue.js | MongoDb
              </p>
            </div>
            <div className="bg-white text-black lg:p-4 p-2 rounded-lg lg:basis-auto basis-auto w-auto lg:w-auto">
              <p className="font-bold lg:text-lg text-md text-center font-sans">
                Crypto Wallet
              </p>
              <p className="font-mono lg:text-sm text-xs text-center">
                Ethereum | Nest.js | React.js | MongoDb | PostgreSQL
              </p>
            </div>
            <div className="bg-yellow-300 text-black lg:p-4 p-2 rounded-lg lg:basis-auto basis-auto w-auto lg:w-auto">
              <p className="font-bold lg:text-lg text-md text-center font-sans">HRM</p>
              <p className="font-mono lg:text-sm text-xs text-center">
                Laravel | Vue.js | MySql
              </p>
            </div>
            <p className="text-8xl text-right font-mono hidden lg:block">Projects</p>
          </div>

          <div className="lg:basis-[45%] basis-full hidden lg:block">
            <div className="border-b border-white pb-4">
              <div className="flex gap-2">
                <div className="">
                  <p className="text-lg font-sans text-gray-500 font-bold">
                    2022
                  </p>
                  <p className="text-sm font-sans text-gray-300">3Y 2Ms</p>
                </div>
                <p className="basis-[40%]">Developers Studio</p>

                <p className="font-mono">
                  Senior Software Engineer | Node.js, Vue.js, Blockchain
                </p>
              </div>
            </div>
            <div className="border-b border-white py-4">
              <div className="flex gap-2">
                <div className="">
                  <p className="text-lg font-sans text-gray-500 font-bold">
                    2022
                  </p>
                  <p className="text-sm font-sans text-gray-300">6Ms</p>
                </div>
                <p className="basis-[40%]">UGA1TECH</p>

                <p className="font-mono">
                  Senior Software Engineer | Node.js, Vue.js, Blockchain
                </p>
              </div>
            </div>
            <div className="border-b border-white py-4">
              <div className="flex gap-2">
                <div className="">
                  <p className="text-lg font-sans text-gray-500 font-bold">
                    2021
                  </p>
                  <p className="text-sm font-sans text-gray-300">6Ms</p>
                </div>
                <p className="basis-[40%]">TechHive</p>

                <p className="font-mono">
                  Senior Software Engineer | Node.js, Vue.js, Blockchain
                </p>
              </div>
            </div>
            <div className="py-4">
              <div className="flex gap-2">
                <div className="">
                  <p className="text-lg font-sans text-gray-500 font-bold">
                    2019
                  </p>
                  <p className="text-sm font-sans text-gray-300">1Y 1M</p>
                </div>
                <p className="basis-[40%]">WTechSols</p>

                <p className="font-mono">
                  Senior Software Engineer | Node.js, Vue.js, Blockchain
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
