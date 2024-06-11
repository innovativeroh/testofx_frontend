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
                    Teams Report
                  </Link>
                </nav>
                <div className="mt-4 w-full">
                  <div className="flex gap-10 justify-between flex-col lg:flex-row">
                    <div className="flex-[4]">
                      <h1 className="mb-4 font-bold text-white text-3xl">
                        Direct Team
                      </h1>
                      <br />
                      <table className="mt-5 table-fixed text-white shadow-lg rounded-lg w-full">
                            <tbody>
                                <tr>
                                    <th className=" border-spacing-2 border-white border-2 p-5 text-xl">SR NO</th>
                                    <th className=" border-spacing-2 border-white border-2 p-5 text-xl">USERNAME</th>
                                    <th className=" border-spacing-2 border-white border-2 p-5 text-xl">NAME</th>
                                    <th className=" border-spacing-2 border-white border-2 p-5 text-xl">MOBILE</th>
                                    <th className=" border-spacing-2 border-white border-2 p-5 text-xl">TOTAL BUSINESS</th>
                                    <th className=" border-spacing-2 border-white border-2 p-5 text-xl">STATUS</th>
                                    <th className=" border-spacing-2 border-white border-2 p-5 text-xl">DATE TIME</th>
                                </tr>
                                <tr>
                                    <td className=" border-spacing-2 border-white border-2 p-5 text-m"></td>
                                    <td className=" border-spacing-2 border-white border-2 p-5" text-m></td>
                                    <td className=" border-spacing-2 border-white border-2 p-5" text-m></td>
                                    <td className=" border-spacing-2 border-white border-2 p-5" text-m></td>
                                    <td className=" border-spacing-2 border-white border-2 p-5 text-m"></td>
                                    <td className=" border-spacing-2 border-white border-2 p-5 text-m"></td>
                                    <td className=" border-spacing-2 border-white border-2 p-5 text-m"></td>
                                </tr>
                            </tbody>
                        </table>
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

