import React from "react";
import HallOfFame from "./Hall_of_Fame";

export default function Homepage() {
  return (
    <>
      <section className="flex h-screen w-full items-center justify-center bg-[#101111]">
        <div className="flex flex-col items-center justify-center text-center max-w-full  gap-8">
          <h1 className="text-3xl font-bold text-white ">
            NFTs with heart. New project inspired by cryptoArt community
          </h1>
          <p className=" w-full text-xl  text-white ">
            We are creating NFTs for charity. MORE charity you give, MORE NFTs
            you mint{" "}
          </p>

          <button className=" rounded-full bg-white py-3  px-5 w-auto text-xl text-black">
            Let's <span className="font-bold">mint</span>
          </button>
        </div>
      </section>

      <section className="flex flex-col gap-12 items-center justify-center h-screen w-full bg-white">
        <div className="w-full h-auto px-12 flex flex-row items-start justify-between ">
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
