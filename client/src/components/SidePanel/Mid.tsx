import { ChartBar, Ellipsis } from "lucide-react";
import { useEffect } from "react";
import { CodeContext } from "../../context/CodeContenxt";
import { useContext } from "react";
import axios from "axios";
import API_URL from "../../config";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Mid = () => {
  const { allChat, setAllChat, setCurrChat, value, currChat } =
    useContext(CodeContext);
  const navigate = useNavigate();

  const getAllChats = async () => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
    try {
      const AllChat = await axios.get(`${API_URL}/getuserchats`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      setAllChat(AllChat.data);
      if (!currChat) {
        setCurrChat(AllChat.data[0].id);
      }
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        toast.error("Session expired, please sign in.");
        navigate("/signin");
      } else {
        console.error("Error fetching chats:", error);
        toast.error("Failed to load chats.");
      }
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
            <div key={chat.id}>
              <button
                onClick={() => setCurrChat(chat.id)}
                key={chat.id}
                className="text-xs relative bg-gradient-to-r from-indigo-600 to-purple-600 w-full text-left px-3 py-1.5 hover:rounded-bg-gray-800/30 flex items-center bg-[#2f2f2f] space-x-3  text-gray-100 transition-all duration-300 hover:scale-103 hover:rounded-md justify-between"
              >
                {/* <MessageSquare className="h-5 w-5 flex-shrink-0" />  */}
                <span className="overflow-hidden whitespace-nowrap text-ellipsis  font-medium flex justify-center">
                  <ChartBar size={15} />

                  {chat.title}
                </span>
                <Ellipsis className="hover:text-gray-700 cursor-pointer  " />
              </button>
            </div>
          ) : (
            <div key={chat.id} className="">
              <button
                onClick={() => {
                  setCurrChat(chat.id);
                }}
                key={chat.id}
                className="text-xs relative hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 w-full text-left px-3 py-1.5 hover:rounded-bg-gray-800/30 flex items-center  space-x-3 text-gray-400 hover:text-gray-100 transition-all duration-300 hover:scale-103 hover:rounded-md justify-between"
              >
                {/* <MessageSquare className="h-5 w-5 flex-shrink-0" />  */}
                <span className="overflow-hidden whitespace-nowrap text-ellipsis  font-medium flex items-center">
                  <ChartBar size={15} />
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
