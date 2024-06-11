import React, { useState } from "react";
import { ExpandMore, ExpandLess, AccountBalance } from "@mui/icons-material";

const WithdrawDropdown: React.FC = () => {
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
        <AccountBalance className="text-cyan-500" />
          <span>Withdraw</span>
        </div>
        {isOpen ? <ExpandLess /> : <ExpandMore />}
      </button>
      {isOpen && (
        <div className="absolute left-0 top-full mt-2 w-full z-10 border-[1px] border-zinc-800" id="gradient">
          <a
            href="/dashboard/withdraw/withdrawal"
            className="transition block p-3 hover:bg-blue-950"
            onClick={() => setIsOpen(false)}
          >
            Withdraw
          </a>
          <a
            href="/dashboard/withdraw/withdrawhistory"
            className="transition block p-3 hover:bg-blue-950"
            onClick={() => setIsOpen(false)}
          >
            Withdraw History
          </a>

        </div>
      )}
    </div>
  );
};

export default WithdrawDropdown;
