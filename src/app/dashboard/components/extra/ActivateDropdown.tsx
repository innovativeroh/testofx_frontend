import React, { useState } from "react";
import { ExpandMore, ExpandLess, ModeStandby } from "@mui/icons-material";

const ActivateDropdown: React.FC = () => {
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
        <ModeStandby className="text-red-500" />
          <span>Activate</span>
        </div>
        {isOpen ? <ExpandLess /> : <ExpandMore />}
      </button>
      {isOpen && (
        <div className="absolute left-0 top-full mt-2 w-full z-10 border-[1px] border-zinc-800" id="gradient">
          <a
            href="/dashboard/activate/activatenow"
            className="transition block p-3 hover:bg-blue-950"
            onClick={() => setIsOpen(false)}
          >
            Activate Now
          </a>
          <a
            href="/dashboard/activate/activatehistory"
            className="transition block p-3 hover:bg-blue-950"
            onClick={() => setIsOpen(false)}
          >
            Activate History
          </a>

        </div>
      )}
    </div>
  );
};

export default ActivateDropdown;
