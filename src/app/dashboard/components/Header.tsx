import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import avatar from "@/../public/avatar.jpg";
import { ExitToAppOutlined } from "@mui/icons-material";
import Banner from "./Banner";

const Header = () => {
  return (
    <>
    <div className="shadow-lg fixed p-2 w-full z-[1]" id="gradient">
      <div className="max-w-[1300px] mx-auto">
            <div className="flex items-center justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger>
                <Image src={avatar} width={50} height={50} alt="Profile" className="rounded-full" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex gap-2 cursor-pointer"><ExitToAppOutlined /> Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        </div>
      </div>
      <Banner />
      </>
  );
};

export default Header;
