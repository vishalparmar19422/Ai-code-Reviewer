import { Ellipsis } from "lucide-react";
import { useState } from "react";

const Mid = () => {
  const [chats] = useState([
    { id: 1, title: "Code Review - React Components" },
    { id: 2, title: "Performance Optimization" },
    { id: 3, title: "Security Review " },
    { id: 3, title: "Security Review " },
    { id: 3, title: "Security Review " },
  ]);
  

  return (
    <>
      <div className="flex-1 border-b border-gray-800/70 bg-[#171717] rounded   ">
        {chats.map((chat) => (
          <div className="">
          <button
            key={chat.id}
            className="text-xs relative hover:bg-gradient-to-r flex   hover:from-indigo-600 hover:to-purple-600 w-full text-left px-3 py-1.5 hover:rounded-bg-gray-800/30 flex items-center bg-[#2f2f2f] space-x-3 text-gray-400 hover:text-gray-100 transition-all duration-300 hover:scale-103 hover:rounded-md justify-between"
          >
            {/* <MessageSquare className="h-5 w-5 flex-shrink-0" />  */}
            <span className="overflow-hidden whitespace-nowrap text-ellipsis  font-medium">
              {chat.title}
            </span>
            <Ellipsis
              className="hover:text-gray-700 cursor-pointer  "
            />
          </button>
          </div>
        ))}

        
      </div>
    </>
  );
};

export default Mid;
