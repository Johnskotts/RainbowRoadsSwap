"use client";
import React, { useState } from "react";
import PriceChart from "../../components/chart";
import { motion, AnimatePresence } from "framer-motion";

export default function ItemsDetail() {
  const [tapStatus, setTapStatus] = useState(false);

  const contentVariants = {
    enter: {
      x: 20,
      opacity: 0,
    },
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      x: -20,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  return (
    <div>
      <div className="w-full bg-[#000000] py-[50px] ">
        <PriceChart />
      </div>

      <div className="mt-[99px] flex justify-center items-center">
        <span className="itemsdetail_page_title">LIQUIDITY POOL MANAGMENT</span>
      </div>
      <div className="mt-[104px] max-w-[1128px] mx-auto flex lg:flex-row flex-col justify-center items-center gap-[20px] px-[20px] lg:pb-[300px] pb-[100px]">
        <div className="lg:w-[500px] h-[588px] md:min-w-[500px] sm:min-w-[350px] lg:pt-[95px] pt-[20px] pl-[28px] pr-[12px] lg:pb-[110px] pb-[20px] rounded-[11px] bg-[#39666F]">
          <div className="flex lg:flex-row flex-col">
            <div className="w-full px-[7px] lg:border-r-[2px] lg:border-b-0 border-b-[2px] lg:border-r-[#3F717A] border-b-[#3F717A] flex lg:flex-col flex-row sm:gap-x-[60px] gap-x-[30px] justify-center items-center">
              <img
                src="/unicorn.svg"
                alt="unicorn"
                className="w-[69px] h-[69px]"
              />
              <div className="mt-[50px] lg:pb-[77px] pb-[30px]">
                <div className="flex justify-between text-[#FFFFFF] text-[16px] leading-[20.48px] itemsdetail_page_smallfont">
                  <span>TVL:</span>
                  <span>13.8474 M UWU</span>
                </div>
                <br />
                <div className="flex justify-between text-[#FFFFFF] text-[16px] leading-[20.48px] itemsdetail_page_smallfont">
                  <span>TVL:</span>
                  <span>13.8474 M UWU</span>
                </div>
                <br />
                <br />
                <div className="flex justify-between text-[#FFFFFF] text-[16px] leading-[20.48px] itemsdetail_page_smallfont pr-[20px]">
                  <span>My Shares:</span>
                  <span>0 UWU</span>
                </div>
              </div>
            </div>
            <div className="w-full px-[7px]  flex lg:flex-col flex-row sm:gap-x-[60px] gap-x-[30px]   justify-center items-center">
              <img
                src="/hammer.svg"
                alt="unicorn"
                className="w-[69px] h-[69px]"
              />
              <div className="lg:mt-[50px] mt-[30px] lg:pb-[77px] pb-[20px]">
                <div className="flex justify-between text-[#FFFFFF] text-[16px] leading-[20.48px] itemsdetail_page_smallfont">
                  <span>TVL:</span>
                  <span>13.8474 M UWU</span>
                </div>
                <br />
                <div className="flex justify-between text-[#FFFFFF] text-[16px] leading-[20.48px] itemsdetail_page_smallfont">
                  <span>TVL:</span>
                  <span>13.8474 M UWU</span>
                </div>
                <br />
                <br />
                <div className="flex justify-between text-[#FFFFFF] text-[16px] leading-[20.48px] itemsdetail_page_smallfont pr-[20px]">
                  <span>My Shares:</span>
                  <span>0 UWU</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[50px]">
            <span className="itemsdetail_page_mediumfont text-[24px] leading-[30.72px] text-[#FFFFFF]">
              Total Pool Value: 27.6125 M UWU
            </span>
          </div>
        </div>

        {/* Right side with animated tabs */}
        <div className="lg:w-[500px] h-[588px] max-w-[500px] rounded-[11px] bg-[#0E0D14] pt-[14px] pr-[17px] pl-[16px] pb-[45px] lg:mt-0 mt-[100px]">
          <div className="relative flex w-full rounded-[11px] bg-[#1E1E1E] px-[7px] pt-[8px] pb-[6px]">
            {/* Tab Container */}
            <div className="relative flex w-full">
              {/* Animated Background */}
              <motion.div
                className="absolute top-0 left-0 w-1/2 h-[74px] bg-[#0E0D14] rounded-[11px]"
                animate={{
                  x: tapStatus ? "100%" : "0%",
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              />

              {/* Tab Buttons */}
              <button
                onClick={() => setTapStatus(false)}
                className="relative flex w-full h-[74px] justify-center items-center rounded-[11px] z-10"
              >
                <motion.span
                  animate={{
                    color: !tapStatus ? "#FFFFFF" : "rgba(255, 255, 255, 0.7)",
                  }}
                  className="itemsdetail_page_mediumfont text-[24px] leading-[30.72px]"
                >
                  Deposit
                </motion.span>
              </button>
              <button
                onClick={() => setTapStatus(true)}
                className="relative flex w-full h-[74px] justify-center items-center rounded-[11px] z-10"
              >
                <motion.span
                  animate={{
                    color: tapStatus ? "#FFFFFF" : "rgba(255, 255, 255, 0.7)",
                  }}
                  className="itemsdetail_page_mediumfont text-[24px] leading-[30.72px]"
                >
                  Withdraw
                </motion.span>
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {tapStatus ? (
              <motion.div
                key="withdraw"
                initial="enter"
                animate="center"
                exit="exit"
                variants={contentVariants}
                className="mt-[56px] itemsdetail_page_msmallfont text-[24px] leading-[30.72px] text-[#FFFFFF] flex flex-col justify-center items-center"
              >
                <div className="min-w-[303px] lg:px-[98px] md:px-[50px] sm:px-[40px] px-[20px] mx-auto">
                  <span className="text-left">
                    Shares to withdraw:
                    <span className="text-blue-500 cursor-pointer ml-2">
                      max
                    </span>
                  </span>
                  <input
                    type="number"
                    placeholder="0"
                    className="w-full placeholder-white text-[white] bg-[#1E1E1E] mt-[15px] p-[10px] rounded-[5px] focus:border-none outline-none"
                  />
                </div>
                <div className="min-w-[303px] mt-[26px]">
                  <div className="flex flex-col w-full justify-center items-center">
                    <span className="text-center">Expected Return</span>
                    <br />
                    <span className="text-center">0 UWU | 0 XD</span>
                  </div>
                </div>
                <button className="itemsdetail_page_mediumfont text-[24px] leading-[30.72px] w-[205px] h-[51px] mt-[32px] bg-[#7EECF6] text-[#0E0D14] rounded-[5px] transform transition-transform duration-150 active:scale-95">
                  Withdraw
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="deposit"
                initial="enter"
                animate="center"
                exit="exit"
                variants={contentVariants}
                className="mt-[56px] itemsdetail_page_msmallfont text-[24px] leading-[30.72px] text-[#FFFFFF] flex flex-col justify-center items-center"
              >
                <div className="min-w-[303px] lg:px-[98px] md:px-[50px] sm:px-[40px] px-[20px] mx-auto">
                  <span className="text-left">UwU to Deposit:</span>
                  <input
                    type="number"
                    placeholder="0"
                    className="w-full placeholder-white text-[white] bg-[#1E1E1E] mt-[15px] p-[10px] rounded-[5px] focus:border-none outline-none"
                  />
                </div>
                <div className="min-w-[303px] lg:px-[98px] md:px-[50px] sm:px-[40px] px-[20px] mx-auto mt-[26px]">
                  <div className="flex gap-[20px]">
                    <img src="/hammer.svg" alt="hammer" className="w-[24px]" />
                    <span className="text-left">to Deposit:</span>
                  </div>
                  <input
                    type="text"
                    placeholder="0"
                    className="w-full placeholder-white text-[white] bg-[#1E1E1E] mt-[15px] p-[10px] rounded-[5px] focus:border-none outline-none input-spinnerset"
                  />
                </div>
                <button className="itemsdetail_page_mediumfont text-[24px] leading-[30.72px] w-[205px] h-[51px] mt-[62px] bg-[#7EECF6] text-[#0E0D14] rounded-[5px] transform transition-transform duration-150 active:scale-95">
                  Deposit
                </button>
                <span className="itemsdetail_page_msmallfont text-[20px] leading-[25.6px] text-[#FFFFFF] mt-[26px]">
                  Slippage tolerance of 1%
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
