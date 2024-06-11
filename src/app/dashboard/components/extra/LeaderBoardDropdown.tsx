import React, { useState } from "react";
import { ExpandMore, ExpandLess, ViewDayOutlined } from "@mui/icons-material";

const LeaderBoardDropdown: React.FC = () => {
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
        <ViewDayOutlined className="text-blue-900" />
          <span>
              Leader board
          </span>
        </div>
        {isOpen ? <ExpandLess /> : <ExpandMore />}
      </button>
    </div>
  );
};

export default LeaderBoardDropdown;
