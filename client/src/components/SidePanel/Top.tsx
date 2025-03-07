import { Bot, Plus } from "lucide-react";
import { UserButton } from "@clerk/clerk-react";

const Top = () => {
  return (
    <>
      <div className="p-5  bg-[#090a0e]">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <UserButton  />
            <span className="font-semibold text-lg text-gray-100 tracking-tight">
              Bug Finder
            </span>
          </div>
          <button className="p-2.5 hover:bg-gray-800 rounded-lg text-gray-400 hover:text-gray-100 transition-all duration-300  active:scale-105">
            <Plus size={20} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Top;
