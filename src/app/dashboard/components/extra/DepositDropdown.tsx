import React, { useState } from "react";
import { ExpandMore, ExpandLess, ViewDayOutlined } from "@mui/icons-material";

const DepositDropdown: React.FC = () => {
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
          <ViewDayOutlined className="text-blue-500" />
          <span>Deposit</span>
        </div>
        {isOpen ? <ExpandLess /> : <ExpandMore />}
      </button>
      {isOpen && (
        <div className="absolute left-0 top-full mt-2 w-full z-10 border-[1px] border-zinc-800" id="gradient">
          <a
            href="/dashboard/Deposit/deposit"
            className="transition block p-3 hover:bg-blue-950 "
            onClick={() => setIsOpen(false)}
          >
            Deposit
          </a>
          <a
            href="/dashboard/Deposit/deposithistory"
            className="transition block p-3 hover:bg-blue-950"
            onClick={() => setIsOpen(false)}
          >
            Deposit History
          </a>
         
        </div>
      )}
    </div>
  );
};

export default DepositDropdown;
