"use client";
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Link from "next/link";
import Header from "./components/Header";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Header />
      <div className="bg-zinc-900 flex h-screen overflow-hidden">
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <div
          className={`flex-1 transition-all duration-300 ease-in-out ${
            isOpen ? "ml-0 lg:ml-[300px]" : "ml-0 lg:ml-[300px]"
          }`}
        >
          <div>
            <div className="flex-1 p-8 z-[1] w-full">
              <button
                onClick={toggleSidebar}
                className="md:hidden mb-4 focus:outline-none"
              >
                
              </button>
              <div>
                <nav>
                  <Link href="/" className="text-sm text-white">
                    Dashboard
                  </Link>
                  <span className="pr-2 pl-2 text-zinc-200">/</span>
                  <Link href="/" className="text-sm text-white">
                    UserID
                  </Link>
                </nav>
                <div className="mt-4 w-full">
                  <div className="flex gap-10 justify-between flex-col lg:flex-row">
                    <div className="flex-[4]">
                      <h1 className="mb-4 font-bold text-white text-3xl">
                        <AccountTreeOutlinedIcon className="text-3xl" /> Partner
                        Bonuses
                      </h1>
                      <br />
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                        <div
                          id="gradient"
                          className="w-full bg-rounded p-8 text-white border-[1px] border-zinc-800 rounded-xl shadow-xl"
                        >
                          <div className="flex justify-between">
                            <div className="flex">
                            <div className="flex flex-col gap-8">
                            <span className="text-white font-bold">Referral Income</span>
                            <button className=" text-blue-500 p-1 inline-block font-bold rounded-lg border-[1px] border-blue-500">INFO</button>
                            </div>
                            </div>
                            <div className="flex">
                            <div className="flex flex-col gap-8">
                              <span className="text-white font-bold">0 USDT</span>
                              <span><ExpandMoreOutlinedIcon /> 0 Today</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          id="gradient"
                          className="w-full bg-rounded p-8 text-white border-[1px] border-zinc-800 rounded-xl shadow-xl"
                        >
                          <div className="flex justify-between">
                            <div className="flex">
                            <div className="flex flex-col gap-8">
                            <span className="text-white font-bold">Roi Income</span>
                            <button className=" text-blue-500 p-1 inline-block font-bold rounded-lg border-[1px] border-blue-500">INFO</button>
                            </div>
                            </div>
                            <div className="flex">
                            <div className="flex flex-col gap-8">
                              <span className="text-white font-bold">0 USDT</span>
                              <span><ExpandMoreOutlinedIcon /> 0 Today</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          id="gradient"
                          className="w-full bg-rounded p-8 text-white border-[1px] border-zinc-800 rounded-xl shadow-xl"
                        >
                          <div className="flex justify-between">
                            <div className="flex">
                            <div className="flex flex-col gap-8">
                            <span className="text-white font-bold">Level Income</span>
                            <button className=" text-blue-500 p-1 inline-block font-bold rounded-lg border-[1px] border-blue-500">INFO</button>
                            </div>
                            </div>
                            <div className="flex">
                            <div className="flex flex-col gap-8">
                              <span className="text-white font-bold">0 USDT</span>
                              <span><ExpandMoreOutlinedIcon /> 0 Today</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          id="gradient"
                          className="w-full bg-rounded p-8 text-white border-[1px] border-zinc-800 rounded-xl shadow-xl"
                        >
                          <div className="flex justify-between">
                            <div className="flex">
                            <div className="flex flex-col gap-8">
                            <span className="text-white font-bold">Reward Income</span>
                            <button className=" text-blue-500 p-1 inline-block font-bold rounded-lg border-[1px] border-blue-500">INFO</button>
                            </div>
                            </div>
                            <div className="flex">
                            <div className="flex flex-col gap-8">
                              <span className="text-white font-bold">0 USDT</span>
                              <span><ExpandMoreOutlinedIcon /> 0 Today</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          id="gradient"
                          className="w-full bg-rounded p-8 text-white border-[1px] border-zinc-800 rounded-xl shadow-xl"
                        >
                          <div className="flex justify-between">
                            <div className="flex">
                            <div className="flex flex-col gap-8">
                            <span className="text-white font-bold">Club Income</span>
                            <button className=" text-blue-500 p-1 inline-block font-bold rounded-lg border-[1px] border-blue-500">INFO</button>
                            </div>
                            </div>
                            <div className="flex">
                            <div className="flex flex-col gap-8">
                              <span className="text-white font-bold">0 USDT</span>
                              <span><ExpandMoreOutlinedIcon /> 0 Today</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-[2] m-10">
                      <div className="p-10 border-[1px] border-zinc-800 rounded-xl shadow-xl" id="gradient">h</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
