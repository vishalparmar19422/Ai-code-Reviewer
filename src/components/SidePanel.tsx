import * as React from "react";
import { MessageSquare } from "lucide-react";

const SidePanel = () => {
  return (
    <>
      <div className="sp bg-[#171717] h-screen w-1/5 flex flex-col items-stretch">
        <div className="top  rounded h-1/10 w-full flex items-center justify-around">
          <div className="profile w-10 h-10 bg-white rounded-full flex justify-center items-center font-semibold ">
            V
          </div>

          <button className=" rounded py-4 h-11 w-50 cursor-pointer flex justify-around items-center text-lg font-semibold text-white bg-blue-600  hover:bg-blue-700 active:bg-slate-700 ">
            New Chat...
            <MessageSquare />
          </button>
        </div>
        <div className="mid h-[80%] bg-slate-700 rounded-md">
          <div className="prev-chat bg-red-400"></div>
          <div className="prev-chat bg-red-400"></div>
          <div className="prev-chat bg-red-400"></div>
          <div className="prev-chat bg-red-400"></div>

        </div>
        <div className="bottom">
          <div className="chat">
          </div>
        </div>
      </div>
    </>
  );
};

export default SidePanel;
