import sidebarItems from "@/constants/sidebar";
import React from "react";
import Icon from "../Icon/Icon";

const Sidebar = () => {
  return (
    <div className="hidden h-full w-full flex-col justify-between rounded-[30px] bg-black px-12 py-5 lg:flex">
      <div className="flex flex-col">
        <h1 className="my-10 text-4xl font-bold text-white">Board.</h1>
        {sidebarItems["upMenu"].map((item, idx) => (
          <div key={idx} className="flex cursor-pointer gap-x-5 py-5">
            <Icon name={item.icon} className={" text-white"} />
            <div className="text-lg text-white">{item.title}</div>
          </div>
        ))}
      </div>
      <div className="my-5">
        {sidebarItems["downMenu"].map((item) => (
          <div key={item} className="flex cursor-pointer py-2.5 ">
            <div className="text-sm text-white">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
