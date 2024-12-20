"use client";
import React, { useState } from "react";
import LogoIcon from "../icons/logo";
import { GoHomeFill } from "react-icons/go";
import { TbMessageCircleFilled } from "react-icons/tb";
import { PiUsersFourFill } from "react-icons/pi";
import { IoMdSettings } from "react-icons/io";

const sidebarItems = [
  {
    id: 1,
    name: "Home",
    icon: GoHomeFill,
    link: "/",
  },
  {
    id: 2,
    name: "Message",
    icon: TbMessageCircleFilled,
    link: "#",
  },
  {
    id: 3,
    name: "Users",
    icon: PiUsersFourFill,
    link: "#",
  },
];

const Sidebar = () => {
  const [active, setActive] = useState(1);

  return (
    <div className="bg-[#115E56] fixed left-0 px-2.5 max-w-14 min-h-screen flex flex-col justify-between">
      <div>
        <div className="pt-6 pb-7">
          <LogoIcon />
        </div>
        <div className="border-t border-t-[#134E48]" />
        <div className="mt-7 items-center justify-center flex flex-col gap-5">
          {sidebarItems.map((item) => (
            <div
              key={item.id}
              className={`flex items-center gap-2 rounded-[8px] p-2 cursor-pointer duration-300 transition-all hover:bg-white/10 ${
                active === item.id ? "bg-white hover:bg-white" : ""
              }`}
              onClick={() => setActive(item.id)}
            >
              <item.icon
                color={active === item.id ? "#115E56" : "#CCFBEF"}
                size={20}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mb-9 flex items-center justify-center">
        <div
          className={`flex items-center gap-2 rounded-[8px] p-2 cursor-pointer duration-300 transition-all hover:bg-white/10 ${
            active === 4 ? "bg-white hover:bg-white" : ""
          }`}
          onClick={() => setActive(4)}
        >
          <IoMdSettings
            color={active === 4 ? "#115E56" : "#CCFBEF"}
            size={20}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
