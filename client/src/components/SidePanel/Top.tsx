import { Plus } from "lucide-react";
import axios from "axios";
import API_URL from "../../config";
import { useContext } from "react";
import { CodeContext } from "../../context/CodeContenxt";

const Top = () => {
  const { setValue } = useContext(CodeContext);
  const CreateNewChat = async () => {
    await axios.post(
      `${API_URL}/createchat`,
      {},
      {
        headers: { userId: "55bcc920-cef6-4bb7-a9f7-73eeb0ac9685" }, // add dynamically
      }
    );

    setValue("new Chat Created");
  };

  return (
    <>
      <div className="p-5  bg-[#090a0e]">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="user-log flex items-center justify-center text-white bg-gradient-to-r from-purple-500 to-blue-900 w-8 h-8  rounded-full">
              V
            </div>
            <div className=" text-lg text-gray-100 tracking-wider flex items-center font-semibold">
              BugBugGo
            </div>
          </div>
          <button
            onClick={CreateNewChat}
            className="p-2.5 hover:bg-gray-800 rounded-lg text-gray-400 hover:text-gray-100 transition-all duration-300  active:scale-105"
          >
            <Plus size={20} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Top;
