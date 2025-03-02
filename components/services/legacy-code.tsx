import Image from "next/image";
import React from "react";

const LegacyCode = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-slate-800">
          <div className="bg-slate-700 md:shadow-md rounded-xl m-16 border border-indigo-500/50 shadow-xl shadow-indigo-500/50">
            <div className="flex flex-col p-10 px-16 space-y-6 items-center text-center">
              <h1 className="font-light md:text-6xl text-5xl text-white tracking-wide ">
                The best{" "}
                {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
                <span
                  id="spin"
                  className="text-transparent font-normal bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300 "
                ></span>{" "}
                <br /> we have them here.
              </h1>
              <p className="text-gray-400 md:text-2xl text-xl px-18">
                Sometimes your business don&apos;t need a full time hire. Give
                us a chance to fix your software issues and see your income
                flowing. Digital world is changing so fast don&apos;t be left
                behind.
              </p>
              <button
                type="button"
                className="rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white text-lg py-4 px-6"
              >
                Book A Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LegacyCode;
