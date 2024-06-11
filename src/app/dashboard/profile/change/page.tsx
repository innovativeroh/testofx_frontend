"use client";
import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Link from "next/link";

const page = () => {
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
              ></button>
              <div>
                <nav>
                  <Link href="/" className="text-sm text-white">
                    Dashboard
                  </Link>
                  <span className="pr-2 pl-2 text-zinc-200">/</span>
                  <Link href="/" className="text-sm text-white">
                    Profile
                  </Link>
                </nav>
                <div className="mt-4 w-full ">
                  <div className="flex gap-10 justify-between flex-col lg:flex-row">
                    <div className="flex-[4]">
                      <h1 className="mb-4 font-bold text-white text-3xl">
                        Profile
                      </h1>
                      <br />
                      <div className="m-auto max-w-[600px] p-8 rounded-lg border-[1px] shadow-md shadow-zinc-300 border-gray-400">
                        <h3 className="text-white font-semibold text-xl text-center">
                          Change Password
                        </h3>
                        <span className="text-zinc-200 font-semibold text-m mt-4 block">
                            Old Password
                          </span>
                          <input
                            type="password"
                            name="oldpassword"
                            placeholder="Enter Old Password"
                            className="w-full mt-2 p-2 bg-zinc-900 border-[1px] border-zinc-800 shadow-xl rounded-lg text-white"
                          />
                          <span className="text-zinc-200 font-semibold text-m mt-4 block">
                            Password
                          </span>
                          <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="w-full mt-2 p-2 bg-zinc-900 border-[1px] border-zinc-800 shadow-xl rounded-lg text-white"
                          />
                          <span className="text-zinc-200 font-semibold text-m mt-4 block">
                            Confirm Password
                          </span>
                          <input
                            type="password"
                            name="confirmpassword"
                            placeholder="Confirm Password"
                            className="w-full mt-2 p-2 bg-zinc-900 border-[1px] border-zinc-800 shadow-xl rounded-lg text-white"
                          />
                          <div className="flex justify-center">
                            <button
                              type="submit"
                              className="transition hover:bg-blue-400 bg-blue-900 text-white font-semibold w-auto p-2 rounded-xl shadow-xl mt-4"
                            >
                              Transfer
                            </button>
                          </div>
                      </div>
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

export default page;
