import Image from "next/image";
import React from "react";
import Logo from "@/../public/logo.png";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import { AccountBalance, GroupAddOutlined, ModeStandby, MoveUpOutlined, SummarizeOutlined, ViewDayOutlined } from "@mui/icons-material";
import ProfileDropdown from "./extra/ProfileDropdown"; // Adjust the import path if necessary

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out bg-gray-800 text-white w-[300px] flex flex-col z-50`}
        id="gradient"
      >
        <div className="flex items-center justify-between p-4">
          <button
            onClick={toggleSidebar}
            className="md:hidden focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="flex-1 p-4">
          <center>
            <Image src={Logo} width={120} height={45} alt="Logo" />
          </center>
          <div className="mt-10">
            <ul>
              <li className="m-4">
                <a
                  href="/"
                  className="flex justify-start gap-5 hover:border-[1px] hover:border-white rounded-lg p-3 border-[1px] border-transparent"
                  onClick={toggleSidebar}
                >
                  <DashboardOutlinedIcon className="text-white" /> <span>Dashboard</span>
                </a>
                <ProfileDropdown />
                <a
                  href="/"
                  className="flex justify-start gap-5 hover:border-[1px] hover:border-white rounded-lg p-3 border-[1px] border-transparent"
                  onClick={toggleSidebar}
                >
                  <ViewDayOutlined className="text-blue-500" /> <span>Deposit</span>
                </a>
                <a
                  href="/"
                  className="flex justify-start gap-5 hover:border-[1px] hover:border-white rounded-lg p-3 border-[1px] border-transparent"
                  onClick={toggleSidebar}
                >
                  <MoveUpOutlined className="text-purple-500" /> <span>Transfer</span>
                </a>
                <a
                  href="/"
                  className="flex justify-start gap-5 hover:border-[1px] hover:border-white rounded-lg p-3 border-[1px] border-transparent"
                  onClick={toggleSidebar}
                >
                  <ModeStandby className="text-red-500" /> <span>Active</span>
                </a>
                <a
                  href="/"
                  className="flex justify-start gap-5 hover:border-[1px] hover:border-white rounded-lg p-3 border-[1px] border-transparent"
                  onClick={toggleSidebar}
                >
                  <SummarizeOutlined className="text-green-500" /> <span>Income Report</span>
                </a>
                <a
                  href="/"
                  className="flex justify-start gap-5 hover:border-[1px] hover:border-white rounded-lg p-3 border-[1px] border-transparent"
                  onClick={toggleSidebar}
                >
                  <GroupAddOutlined className="text-yellow-500" /> <span>Team Report</span>
                </a>
                <a
                  href="/"
                  className="flex justify-start gap-5 hover:border-[1px] hover:border-white rounded-lg p-3 border-[1px] border-transparent"
                  onClick={toggleSidebar}
                >
                  <AccountBalance className="text-cyan-500" /> <span>Withdraw</span>
                </a>
                <a
                  href="/"
                  className="flex justify-start gap-5 hover:border-[1px] hover:border-white rounded-lg p-3 border-[1px] border-transparent"
                  onClick={toggleSidebar}
                >
                  <ViewDayOutlined className="text-blue-900" /> <span>Leaderboard</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
