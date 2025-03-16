import { Ellipsis } from "lucide-react";
import { useEffect } from "react";
import { CodeContext } from "../../context/CodeContenxt";
import { useContext } from "react";
import axios from "axios";
import API_URL from "../../config";

const Mid = () => {
  const { allChat, setAllChat, setCurrChat, value, currChat } =
    useContext(CodeContext);

  const getAllChats = async () => {
    try {
      const AllChat = await axios.get(`${API_URL}/getuserchats`, {
        headers: {
          userId: "55bcc920-cef6-4bb7-a9f7-73eeb0ac9685",
        },
      });
      setAllChat(AllChat.data);
      if (AllChat && AllChat.data.length > 0 && !currChat) {
        setCurrChat(AllChat.data[0].id);
      }
    } catch (error) {
      console.log("error fetching chats", error);
    }
  };

  useEffect(() => {
    getAllChats();
  }, [value]);

  return (
    <>
      <div className="flex-1 border-b border-gray-800/70 bg-[#171717] rounded   ">
        {allChat.map((chat) =>
          currChat == chat.id ? (
            <div key={chat.id} className="">
              <button
                onClick={() => setCurrChat(chat.id)}
                key={chat.id}
                className="text-xs relative bg-gradient-to-r from-indigo-600 to-purple-600 w-full text-left px-3 py-1.5 hover:rounded-bg-gray-800/30 flex items-center bg-[#2f2f2f] space-x-3  text-gray-100 transition-all duration-300 hover:scale-103 hover:rounded-md justify-between"
              >
                {/* <MessageSquare className="h-5 w-5 flex-shrink-0" />  */}
                <span className="overflow-hidden whitespace-nowrap text-ellipsis  font-medium">
                  {chat.title}
                </span>
                <Ellipsis className="hover:text-gray-700 cursor-pointer  " />
              </button>
            </div>
          ) : (
            <div key={chat.id} className="">
              <button
                onClick={() => setCurrChat(chat.id)}
                key={chat.id}
                className="text-xs relative hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 w-full text-left px-3 py-1.5 hover:rounded-bg-gray-800/30 flex items-center bg-[#2f2f2f] space-x-3 text-gray-400 hover:text-gray-100 transition-all duration-300 hover:scale-103 hover:rounded-md justify-between"
              >
                {/* <MessageSquare className="h-5 w-5 flex-shrink-0" />  */}
                <span className="overflow-hidden whitespace-nowrap text-ellipsis  font-medium">
                  {chat.title}
                </span>
                <Ellipsis className="hover:text-gray-700 cursor-pointer  " />
              </button>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default Mid;
