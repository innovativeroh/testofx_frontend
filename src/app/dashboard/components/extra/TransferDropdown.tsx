import React, { useState } from "react";
import { ExpandMore, ExpandLess, MoveUpOutlined } from "@mui/icons-material";

const TransferDropdown: React.FC = () => {
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
          <MoveUpOutlined className="text-purple-500" />
          <span>Transfer</span>
        </div>
        {isOpen ? <ExpandLess /> : <ExpandMore />}
      </button>
      {isOpen && (
        <div className="absolute left-0 top-full mt-2 w-full z-10 border-[1px] border-zinc-800" id="gradient">
          <a
            href="/dashboard/transfer/maintofund"
            className="transition block p-3 hover:bg-blue-950"
            onClick={() => setIsOpen(false)}
          >
            Main To Fund
          </a>
          <a
            href="/dashboard/transfer/fundtofund"
            className="transition block p-3 hover:bg-blue-950"
            onClick={() => setIsOpen(false)}
          >
            Fund To Fund
          </a>
          <a
            href="/dashboard/transfer/transferhistory"
            className="transition block p-3 hover:bg-blue-950"
            onClick={() => setIsOpen(false)}
          >
            Transfer History
          </a>

        </div>
      )}
    </div>
  );
};

export default TransferDropdown;
