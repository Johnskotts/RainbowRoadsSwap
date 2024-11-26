"use client";
import Swap from "@/app/swap/page";
import { useState, useEffect } from "react";
import { useModal } from "../context/MyContext";
import { useRouter } from "next/navigation";

export default function RankingPage() {
  const router = useRouter();

  const { modalStatus, setModal } = useModal();

  const navigateToItem = () => {
    router.push("/items-detail");
    console.log(router);
  };
  // useEffect(() => {
  //   if (!router.isReady) {
  //     return;
  //   }
  // }, [router]);
  return (
    <div
      className={`max-w-[1720px] mx-auto pl-[32px] pr-[31px] pt-[104px] pb-[94px] bg-black relative`}
    >
      <div
        className={`flex justify-center items-center w-full h-full absolute top-0 left-0 ${
          modalStatus ? "hidden" : "block"
        } transition-transform ease-in-out duration-150 bg-[#3f717a] z-10`}
      >
        <Swap />
      </div>
      <div className="flex justify-center items-center">
        <span className="ranking_page_title_font 2xl:text-[44px] xl:text-[36px] lg:text-[28px] md:text-[36px] text-[24px] text-center">
          Unicorn Emoji Market- looks like an otaku’s Wall Street
        </span>
      </div>

      <div className="flex lg:justify-end justify-center">
        <span className="ranking_page_subtitle_font 2xl:text-[56px] xl:text-[48px] lg:text-[40px] md:text-[32px] text-[28px]  lg:pr-[248px] mt-[49px]">
          Emoji Market
        </span>
      </div>
      <div className="xl:grid lg:grid-cols-7 flex flex-col justify-center items-center gap-[45px] mt-[54px] lg:pl-[32px] pl-0">
        <div className="xl:col-span-3 ">
          <img src="/emoji.svg" alt="emoji" />
        </div>
        <div className="xl:col-span-4 flex justify-center items-center flex-col">
          <div className="ranking_page_small_font 2xl:text-[28px] xl:text-[24px] sm:text-[28px] text-[20px] text-center">
            Check your meme coins balances here:
            <span style={{ color: "rgba(126,236,246,1)" }}>inventory</span>
          </div>
          <div className="mt-[50px]">
            <div className="flex sm:gap-[115px] gap-[20px] text-nowrap">
              <span className="w-2/3 ranking_page_medium_font 2xl:text-[32px] xl:text-[28px] sm:text-[32px] text-[16px]">
                Total Market Cap
              </span>
              <span className="w-1/3 ranking_page_medium_val_font 2xl:text-[32px] xl:text-[28px] sm:text-[32px] text-[16px]">
                14.6323 B
              </span>
            </div>
            <div className="flex sm:gap-[115px] gap-[20px]">
              <span className="w-2/3 ranking_page_medium_font 2xl:text-[32px] xl:text-[28px] sm:text-[32px] text-[16px]">
                Total Market Cap USD
              </span>
              <span className="w-1/3 ranking_page_medium_val_font 2xl:text-[32px] xl:text-[28px] sm:text-[32px] text-[16px]">
                6.11 M USD
              </span>
            </div>
            <div className="flex sm:gap-[115px] gap-[20px]">
              <span className="w-2/3 ranking_page_medium_font 2xl:text-[32px] xl:text-[28px] sm:text-[32px] text-[16px]">
                Total 24h Volume
              </span>
              <span className="w-1/3 ranking_page_medium_val_font 2xl:text-[32px] xl:text-[28px] sm:text-[32px] text-[16px]">
                46.9893 M
              </span>
            </div>
            <div className="flex sm:gap-[115px] gap-[20px]">
              <span className="w-2/3 ranking_page_medium_font 2xl:text-[32px] xl:text-[28px] sm:text-[32px] text-[16px]">
                Total 24h Volume USD
              </span>
              <span className="w-1/3 ranking_page_medium_val_font whitespace-nowrap 2xl:text-[32px] xl:text-[28px] sm:text-[32px] text-[16px]">
                19.63 K USD
              </span>
            </div>
            <br />
            <br />
            <div className="flex sm:gap-[115px] gap-[20px]">
              <span className="w-2/3 ranking_page_medium_font 2xl:text-[32px] xl:text-[28px] sm:text-[32px] text-[16px]">
                Biggest 1h Gainer
              </span>
              <span className="w-1/3 ranking_page_medium_val_font 2xl:text-[32px] xl:text-[28px] sm:text-[32px] text-[16px]">
                1.24%
              </span>
            </div>
            <div className="flex sm:gap-[115px] gap-[20px]">
              <span className="w-2/3 ranking_page_medium_font 2xl:text-[32px] xl:text-[28px] sm:text-[32px] text-[16px]">
                Biggest 24h Gainer
              </span>
              <span className="w-1/3 ranking_page_medium_val_font 2xl:text-[32px] xl:text-[28px] sm:text-[32px] text-[16px]">
                19.69%
              </span>
            </div>
            <div className="flex sm:gap-[115px] gap-[20px]">
              <span className="w-2/3 ranking_page_medium_font 2xl:text-[32px] xl:text-[28px] sm:text-[32px] text-[16px]">
                Biggest 24h Volume
              </span>
              <span className="w-1/3 ranking_page_medium_val_font 2xl:text-[32px] xl:text-[28px] sm:text-[32px] text-[16px]">
                7.1458 M
              </span>
            </div>
            <div className="w-full flex justify-center items-center mt-[25px]">
              <button
                onClick={() => setModal(!modalStatus)}
                className="w-[250px] h-[80px] ranking_page_medium_val_font 2xl:text-[32px] xl:text-[28px] text-[32px] bg-[#3f717a] hover:bg-[#5a8b94] rounded-[11px] transform transition-transform duration-150 active:scale-95"
              >
                Swap
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[150px] flex justify-start items-center gap-[11px]">
        <input
          type="checkbox"
          className="w-[31px] h-[31px] border-[1px] border-[#3F717A] rounded-[3px]"
          style={{ background: "#D9D9D900" }}
        />
        <span className="ranking_page_checkbutton_content">
          Show all prices in USD
        </span>
      </div>
      <div className="mt-[22px] overflow-x-scroll">
        <table id="customers">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Latest Price</th>
              <th>Price 1h%</th>
              <th>Price 24h%</th>
              <th>volume(24h)</th>
              <th>TVL</th>
              <th>Market Cap</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr className="cursor-pointer" onClick={() => navigateToItem()}>
              <td>1</td>
              <td>
                <div className="flex gap-[15px]">
                  <img src="/unicorn.svg" alt="unicorn" />
                  <div className="flex flex-col">
                    <span>Unicorn</span>
                    <span>#uwu</span>
                  </div>
                </div>
              </td>
              <td>
                <div className="flex justify-center items-center gap-[5px]">
                  <span>1</span>
                  <img src="/unicorn.svg" alt="unicorn" />
                </div>
              </td>
              <td>
                <span>-0.00%</span>
              </td>
              <td>
                <span>+0.37%</span>
              </td>
              <td>
                <div className="flex justify-center items-center gap-[5px]">
                  <span>23.9 M</span>
                  <img src="/unicorn.svg" alt="unicorn" />
                </div>
              </td>
              <td>
                <div className="flex justify-center items-center gap-[5px]">
                  <span>991463 M</span>
                  <img src="/unicorn.svg" alt="unicorn" />
                </div>
              </td>
              <td>-</td>
              <td>
                <div className="flex gap-[14.25px] justify-center items-center">
                  <img src="/twitter.svg" alt="twitter" />
                  <img src="/telegram.svg" alt="telegram" />
                  <img src="/discord.svg" alt="discord" />
                </div>
              </td>
            </tr>
            <tr className="cursor-pointer" onClick={() => navigateToItem()}>
              <td>2</td>
              <td>
                <div className="flex gap-[15px]">
                  <img src="/unicorn.svg" alt="unicorn" />
                  <div className="flex flex-col">
                    <span>Unicorn</span>
                    <span>#uwu</span>
                  </div>
                </div>
              </td>
              <td>
                <div className="flex justify-center items-center gap-[5px]">
                  <span>2</span>
                  <img src="/unicorn.svg" alt="unicorn" />
                </div>
              </td>
              <td>
                <span>-0.00%</span>
              </td>
              <td>
                <span>-0.37%</span>
              </td>
              <td>
                <div className="flex justify-center items-center gap-[5px]">
                  <span>23.9 M</span>
                  <img src="/unicorn.svg" alt="unicorn" />
                </div>
              </td>
              <td>
                <div className="flex justify-center items-center gap-[5px]">
                  <span>991463 M</span>
                  <img src="/unicorn.svg" alt="unicorn" />
                </div>
              </td>
              <td>-</td>
              <td>
                <div className="flex gap-[14.25px] justify-center items-center">
                  <img src="/twitter.svg" alt="twitter" />
                  <img src="/telegram.svg" alt="telegram" />
                  <img src="/discord.svg" alt="discord" />
                </div>
              </td>
            </tr>

            <tr className="cursor-pointer" onClick={() => navigateToItem()}>
              <td>1</td>
              <td>
                <div className="flex gap-[15px]">
                  <img src="/unicorn.svg" alt="unicorn" />
                  <div className="flex flex-col">
                    <span>Unicorn</span>
                    <span>#uwu</span>
                  </div>
                </div>
              </td>
              <td>
                <div className="flex justify-center items-center gap-[5px]">
                  <span>1</span>
                  <img src="/unicorn.svg" alt="unicorn" />
                </div>
              </td>
              <td>
                <span>-0.00%</span>
              </td>
              <td>
                <span>+0.37%</span>
              </td>
              <td>
                <div className="flex justify-center items-center gap-[5px]">
                  <span>23.9 M</span>
                  <img src="/unicorn.svg" alt="unicorn" />
                </div>
              </td>
              <td>
                <div className="flex justify-center items-center gap-[5px]">
                  <span>991463 M</span>
                  <img src="/unicorn.svg" alt="unicorn" />
                </div>
              </td>
              <td>-</td>
              <td>
                <div className="flex gap-[14.25px] justify-center items-center">
                  <img src="/twitter.svg" alt="twitter" />
                  <img src="/telegram.svg" alt="telegram" />
                  <img src="/discord.svg" alt="discord" />
                </div>
              </td>
            </tr>
            <tr className="cursor-pointer" onClick={() => navigateToItem()}>
              <td>2</td>
              <td>
                <div className="flex gap-[15px]">
                  <img src="/unicorn.svg" alt="unicorn" />
                  <div className="flex flex-col">
                    <span>Unicorn</span>
                    <span>#uwu</span>
                  </div>
                </div>
              </td>
              <td>
                <div className="flex justify-center items-center gap-[5px]">
                  <span>2</span>
                  <img src="/unicorn.svg" alt="unicorn" />
                </div>
              </td>
              <td>
                <span>-0.00%</span>
              </td>
              <td>
                <span>-0.37%</span>
              </td>
              <td>
                <div className="flex justify-center items-center gap-[5px]">
                  <span>23.9 M</span>
                  <img src="/unicorn.svg" alt="unicorn" />
                </div>
              </td>
              <td>
                <div className="flex justify-center items-center gap-[5px]">
                  <span>991463 M</span>
                  <img src="/unicorn.svg" alt="unicorn" />
                </div>
              </td>
              <td>-</td>
              <td>
                <div className="flex gap-[14.25px] justify-center items-center">
                  <img src="/twitter.svg" alt="twitter" />
                  <img src="/telegram.svg" alt="telegram" />
                  <img src="/discord.svg" alt="discord" />
                </div>
              </td>
            </tr>
            <tr className="cursor-pointer" onClick={() => navigateToItem()}>
              <td>1</td>
              <td>
                <div className="flex gap-[15px]">
                  <img src="/unicorn.svg" alt="unicorn" />
                  <div className="flex flex-col">
                    <span>Unicorn</span>
                    <span>#uwu</span>
                  </div>
                </div>
              </td>
              <td>
                <div className="flex justify-center items-center gap-[5px]">
                  <span>1</span>
                  <img src="/unicorn.svg" alt="unicorn" />
                </div>
              </td>
              <td>
                <span>-0.00%</span>
              </td>
              <td>
                <span>+0.37%</span>
              </td>
              <td>
                <div className="flex justify-center items-center gap-[5px]">
                  <span>23.9 M</span>
                  <img src="/unicorn.svg" alt="unicorn" />
                </div>
              </td>
              <td>
                <div className="flex justify-center items-center gap-[5px]">
                  <span>991463 M</span>
                  <img src="/unicorn.svg" alt="unicorn" />
                </div>
              </td>
              <td>-</td>
              <td>
                <div className="flex gap-[14.25px] justify-center items-center">
                  <img src="/twitter.svg" alt="twitter" />
                  <img src="/telegram.svg" alt="telegram" />
                  <img src="/discord.svg" alt="discord" />
                </div>
              </td>
            </tr>
            <tr className="cursor-pointer" onClick={() => navigateToItem()}>
              <td>2</td>
              <td>
                <div className="flex gap-[15px]">
                  <img src="/unicorn.svg" alt="unicorn" />
                  <div className="flex flex-col">
                    <span>Unicorn</span>
                    <span>#uwu</span>
                  </div>
                </div>
              </td>
              <td>
                <div className="flex justify-center items-center gap-[5px]">
                  <span>2</span>
                  <img src="/unicorn.svg" alt="unicorn" />
                </div>
              </td>
              <td>
                <span>-0.00%</span>
              </td>
              <td>
                <span>-0.37%</span>
              </td>
              <td>
                <div className="flex justify-center items-center gap-[5px]">
                  <span>23.9 M</span>
                  <img src="/unicorn.svg" alt="unicorn" />
                </div>
              </td>
              <td>
                <div className="flex justify-center items-center gap-[5px]">
                  <span>991463 M</span>
                  <img src="/unicorn.svg" alt="unicorn" />
                </div>
              </td>
              <td>-</td>
              <td>
                <div className="flex gap-[14.25px] justify-center items-center">
                  <img src="/twitter.svg" alt="twitter" />
                  <img src="/telegram.svg" alt="telegram" />
                  <img src="/discord.svg" alt="discord" />
                </div>
              </td>
            </tr>
            <tr className="cursor-pointer" onClick={() => navigateToItem()}>
              <td>1</td>
              <td>
                <div className="flex gap-[15px]">
                  <img src="/unicorn.svg" alt="unicorn" />
                  <div className="flex flex-col">
                    <span>Unicorn</span>
                    <span>#uwu</span>
                  </div>
                </div>
              </td>
              <td>
                <div className="flex justify-center items-center gap-[5px]">
                  <span>1</span>
                  <img src="/unicorn.svg" alt="unicorn" />
                </div>
              </td>
              <td>
                <span>-0.00%</span>
              </td>
              <td>
                <span>+0.37%</span>
              </td>
              <td>
                <div className="flex justify-center items-center gap-[5px]">
                  <span>23.9 M</span>
                  <img src="/unicorn.svg" alt="unicorn" />
                </div>
              </td>
              <td>
                <div className="flex justify-center items-center gap-[5px]">
                  <span>991463 M</span>
                  <img src="/unicorn.svg" alt="unicorn" />
                </div>
              </td>
              <td>-</td>
              <td>
                <div className="flex gap-[14.25px] justify-center items-center">
                  <img src="/twitter.svg" alt="twitter" />
                  <img src="/telegram.svg" alt="telegram" />
                  <img src="/discord.svg" alt="discord" />
                </div>
              </td>
            </tr>
            <tr className="cursor-pointer" onClick={() => navigateToItem()}>
              <td>2</td>
              <td>
                <div className="flex gap-[15px]">
                  <img src="/unicorn.svg" alt="unicorn" />
                  <div className="flex flex-col">
                    <span>Unicorn</span>
                    <span>#uwu</span>
                  </div>
                </div>
              </td>
              <td>
                <div className="flex justify-center items-center gap-[5px]">
                  <span>2</span>
                  <img src="/unicorn.svg" alt="unicorn" />
                </div>
              </td>
              <td>
                <span>-0.00%</span>
              </td>
              <td>
                <span>-0.37%</span>
              </td>
              <td>
                <div className="flex justify-center items-center gap-[5px]">
                  <span>23.9 M</span>
                  <img src="/unicorn.svg" alt="unicorn" />
                </div>
              </td>
              <td>
                <div className="flex justify-center items-center gap-[5px]">
                  <span>991463 M</span>
                  <img src="/unicorn.svg" alt="unicorn" />
                </div>
              </td>
              <td>-</td>
              <td>
                <div className="flex gap-[14.25px] justify-center items-center">
                  <img src="/twitter.svg" alt="twitter" />
                  <img src="/telegram.svg" alt="telegram" />
                  <img src="/discord.svg" alt="discord" />
                </div>
              </td>
            </tr>
            <tr className="cursor-pointer" onClick={() => navigateToItem()}>
              <td>1</td>
              <td>
                <div className="flex gap-[15px]">
                  <img src="/unicorn.svg" alt="unicorn" />
                  <div className="flex flex-col">
                    <span>Unicorn</span>
                    <span>#uwu</span>
                  </div>
                </div>
              </td>
              <td>
                <div className="flex justify-center items-center gap-[5px]">
                  <span>1</span>
                  <img src="/unicorn.svg" alt="unicorn" />
                </div>
              </td>
              <td>
                <span>-0.00%</span>
              </td>
              <td>
                <span>+0.37%</span>
              </td>
              <td>
                <div className="flex justify-center items-center gap-[5px]">
                  <span>23.9 M</span>
                  <img src="/unicorn.svg" alt="unicorn" />
                </div>
              </td>
              <td>
                <div className="flex justify-center items-center gap-[5px]">
                  <span>991463 M</span>
                  <img src="/unicorn.svg" alt="unicorn" />
                </div>
              </td>
              <td>-</td>
              <td>
                <div className="flex gap-[14.25px] justify-center items-center">
                  <img src="/twitter.svg" alt="twitter" />
                  <img src="/telegram.svg" alt="telegram" />
                  <img src="/discord.svg" alt="discord" />
                </div>
              </td>
            </tr>
            <tr className="cursor-pointer" onClick={() => navigateToItem()}>
              <td>2</td>
              <td>
                <div className="flex gap-[15px]">
                  <img src="/unicorn.svg" alt="unicorn" />
                  <div className="flex flex-col">
                    <span>Unicorn</span>
                    <span>#uwu</span>
                  </div>
                </div>
              </td>
              <td>
                <div className="flex justify-center items-center gap-[5px]">
                  <span>2</span>
                  <img src="/unicorn.svg" alt="unicorn" />
                </div>
              </td>
              <td>
                <span>-0.00%</span>
              </td>
              <td>
                <span>-0.37%</span>
              </td>
              <td>
                <div className="flex justify-center items-center gap-[5px]">
                  <span>23.9 M</span>
                  <img src="/unicorn.svg" alt="unicorn" />
                </div>
              </td>
              <td>
                <div className="flex justify-center items-center gap-[5px]">
                  <span>991463 M</span>
                  <img src="/unicorn.svg" alt="unicorn" />
                </div>
              </td>
              <td>-</td>
              <td>
                <div className="flex gap-[14.25px] justify-center items-center">
                  <img src="/twitter.svg" alt="twitter" />
                  <img src="/telegram.svg" alt="telegram" />
                  <img src="/discord.svg" alt="discord" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
