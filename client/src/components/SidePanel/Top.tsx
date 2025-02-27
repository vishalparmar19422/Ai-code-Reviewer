import { Bot,Plus } from "lucide-react";

const Top = () => {
  return (
    <>
      <div className="p-5  bg-[#090a0e]">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20 transition-transform hover:scale-105 duration-300 ">
                <Bot className="text-white" size={24} />
              </div>
              <span className="font-semibold text-lg text-gray-100 tracking-tight">Bug Buster</span>
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
