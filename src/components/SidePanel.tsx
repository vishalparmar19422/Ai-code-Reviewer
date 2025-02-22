import * as React from "react";
import { MessageSquare } from 'lucide-react';

const SidePanel = () => {
  return (
    <>
      <div className="sp bg-[#171717] h-screen w-1/5">

        <div className="top bg-black rounded h-1/10 w-full flex items-center justify-around">

          <div className="profile w-10 h-10 bg-white rounded-full "></div>

            <button className=" rounded py-4 h-11 w-50 cursor-pointer flex justify-around items-center text-lg font-semibold text-white bg-blue-600  hover:bg-blue-400 hover:text-black">
              New Chat...
              <MessageSquare />
            </button>


        </div>

        <div className="mid"></div>

        <div className="bottom"></div>
      </div>
    </>
  );
};

export default SidePanel;
