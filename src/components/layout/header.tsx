"use client";
import React, { useState } from "react";
import { IoPieChart } from "react-icons/io5";
import { FaTag } from "react-icons/fa6";
import { BiMessageRoundedDetail } from "react-icons/bi";
import clsx from "clsx";

const headerItems = [
  {
    id: 1,
    name: "Summary",
    icon: IoPieChart,
    link: "#",
  },
  {
    id: 2,
    name: "Sales",
    icon: FaTag,
    link: "#",
  },
  {
    id: 3,
    name: "Chats",
    icon: BiMessageRoundedDetail,
    link: "#",
  },
];

const Header = () => {
  const [active, setActive] = useState(1);
  return (
    <div className="py-6 z-50 pl-10 border-b fixed left-14 bg-white border-b-[#DCDFE4] w-full h-fit">
      <div className="flex gap-3 items-center">
        {headerItems.map((item) => (
          <div
            onClick={() => setActive(item.id)}
            key={item.id}
            className={clsx(
              "flex items-center gap-3 p-3 text-[#8A94A6] rounded-full cursor-pointer transition-all duration-300",
              {
                "bg-[#CCFBEF] text-black": active === item.id,
              }
            )}
          >
            <item.icon size={20} />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
