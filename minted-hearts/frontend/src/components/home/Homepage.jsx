import React from "react";
import HallOfFame from "./Hall_of_Fame";

export default function Homepage() {
  return (
    <>
      <section className="flex h-screen w-full items-center justify-center bg-[#101111] font-[RobotoNew]">
        <div className="flex flex-col items-center justify-center text-center max-w-full  gap-8">
          <h1 className="text-3xl font-bold text-white ">
            NFTs with <span className="font-bold font-mono text-pink-600">heart</span>. Project inspired by <span className="font-bold font-mono text-yellow-400">mercy</span> and <span className="font-bold font-mono text-cyan-400">cryptoArt</span> community
          </h1>
          <p className=" w-full text-xl  text-white ">
            We are creating NFTs for charity. More charity you give, More NFTs
            you <span className="font-bold font-mono text-emerald-400">mint</span>
          </p>

          <button className=" rounded-full bg-white py-3 font-sans hover:cursor-pointer  px-5 w-auto text-xl text-black">
            Let's <span className="font-bold font-mono text-emerald-400">mint</span>
          </button>
        </div>
      </section>

      <section className="flex flex-col gap-12 items-center justify-center h-auto w-full bg-white font-[RobotoNew] py-12">
        <div className="w-full px-12 flex flex-row items-start justify-between ">
          <h1 className="text-3xl font-bold">Meet the Champions</h1>
          <button>View all</button>
        </div>
        <div className="flex w-full h-auto items-center justify-center ">
          <HallOfFame/>
        </div>
      </section>
    </>
  );
}
