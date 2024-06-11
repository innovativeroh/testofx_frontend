import React, { useState } from "react";
import { ExpandMore, ExpandLess, SummarizeOutlined } from "@mui/icons-material";

const IncomesReportDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex justify-between items-center w-full p-3 border-[1px] border-transparent hover:border-white rounded-lg"
      >
        <div className="flex items-center gap-5">
          <SummarizeOutlined className="text-green-500" />
          <span>Incomes Report</span>
        </div>
        {isOpen ? <ExpandLess /> : <ExpandMore />}
      </button>
      {isOpen && (
        <div className="absolute left-0 top-full mt-2 w-full z-10 border-[1px] border-zinc-800" id="gradient">
          <a
            href="/dashboard/incomes/roireport"
            className="transition block p-3 hover:bg-blue-950"
            onClick={() => setIsOpen(false)}
          >
            Roi Report
          </a>
          <a
            href="/dashboard/incomes/directincome"
            className="transition block p-3 hover:bg-blue-950"
            onClick={() => setIsOpen(false)}
          >
            Direct Income
          </a>
          <a
            href="/dashboard/incomes/levelincome"
            className="transition block p-3 hover:bg-blue-950"
            onClick={() => setIsOpen(false)}
          >
            Level Income
          </a>
          <a
            href="/dashboard/incomes/clubincome"
            className="transition block p-3 hover:bg-blue-950"
            onClick={() => setIsOpen(false)}
          >
            Club Income
          </a>
          <a
            href="/dashboard/incomes/rewardincome"
            className="transition block p-3 hover:bg-blue-950"
            onClick={() => setIsOpen(false)}
          >
            Reward Income
          </a>


        </div>
      )}
    </div>
  );
};

export default IncomesReportDropdown;
