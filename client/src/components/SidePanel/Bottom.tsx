import { Send } from "lucide-react";

const Bottom = () => {
  return (
    <>
       <div className="py-5 px-2  bg-[#090a0e]">
          <div className="relative group  ">
            <input
              type="text"
              placeholder="Ask AI..."
              className="w-full pl-4 pr-12 py-3 rounded-lg bg-gray-900 border-gray-700 border text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500  transition-all duration-300 hover:bg-gray-900/70"
            />
            <button className="absolute right-3 top-[10px] text-gray-400 hover:text-indigo-400 transition-all duration-300 p-1.5 hover:bg-indigo-500/10 rounded-full">
              <Send size={18} />
            </button>
          </div>
        </div>
    </>
  );
};

export default Bottom;
