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
                    Deposit
                  </Link>
                </nav>
                <div className="mt-4 w-full">
                  <div className="flex gap-10 justify-between flex-col lg:flex-row">
                    <div className=" ">
                      <h1 className="mb-4 font-bold text-white text-3xl">
                        Deposit History
                      </h1>
                      <br />
                      <table className="mt-3 table-fixed text-white w-full">
                            <tbody>
                                <tr className=" m-2 ">
                                    <th className=" border-spacing-10 p-5 m-10 bg-indigo-500 text-white rounded-xl">SR NO</th>
                                    <th className=" border-spacing-10 p-5 m-10 bg-indigo-500 text-white rounded-xl">ADDRESS</th>
                                    <th className=" border-spacing-10 p-5 m-10 bg-indigo-500 text-white rounded-xl">TXN ID</th>
                                    <th className=" border-spacing-10 p-5 m-10 bg-indigo-500 text-white rounded-xl">STATUS</th>
                                    <th className=" border-spacing-10 p-5 m-10 bg-indigo-500 text-white rounded-xl">AMOUNT</th>
                                    <th className=" border-spacing-10 p-5 m-10 bg-indigo-500 text-white rounded-xl">DATE TIME</th>
                                </tr>
                                <tr>
                                    <td className=" border-spacing-10 m-10 p-5 text-s text-white rounded-lg"></td>
                                    <td className=" border-spacing-10 m-10 p-5 text-s text-white rounded-lg"></td>
                                    <td className=" border-spacing-10 m-10 p-5 text-s text-white rounded-lg"></td>
                                    <td className=" border-spacing-10 m-10 p-5 text-s text-white rounded-lg"></td>
                                    <td className=" border-spacing-10 m-10 p-5 text-s text-white rounded-lg"></td>
                                    <td className=" border-spacing-10 m-10 p-5 text-s text-white rounded-lg"></td>
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
