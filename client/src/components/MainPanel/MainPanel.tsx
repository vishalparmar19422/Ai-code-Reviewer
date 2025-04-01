import { ChangeEvent, useContext, useEffect, useState } from "react";
import {
  MessageSquare,
  ChevronDown,
  Check,
  Copy,
  Maximize,
} from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { Editor } from "@monaco-editor/react";
import "monaco-editor/min/vs/editor/editor.main.css";
import { CodeContext } from "../../context/CodeContenxt";
import API_URL from "../../config";

export default function MainPanel() {
  const {
    setValue,
    setErrPop,
    currChat,
    allChat,
    currChatData,
    setCurrChatData,
  } = useContext(CodeContext);
  const [code, setCode] = useState("Hello");
  const [language, setLanguage] = useState("js");
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const languages = [
    { id: "js", name: "JavaScript" },
    { id: "cpp", name: "C++" },
    { id: "python", name: "Python" },
    { id: "java", name: "Java" },
  ];
  const getGeminiResponse = () => {
    axios
      .put(
        `${API_URL}/getreview`,
        { code: code },
        { headers: { chatId: currChat } }
      )
      .then((res) => {
        setValue(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    setErrPop(true);
  };

  const copyToClipboard = () => {
    if (currChatData) {
      navigator.clipboard.writeText(currChatData?.code);
      toast.success("Code copied to clipboard!", {
        style: {
          background: "#1F2937",
          color: "#fff",
          borderRadius: "0.5rem",
        },
        iconTheme: {
          primary: "#818CF8",
          secondary: "#1F2937",
        },
      });
    }
  };

  useEffect(() => {
    if (currChat) {
      const chat = allChat.find((chat) => {
        return chat.id == currChat;
      });
      setCurrChatData(chat);
    } else {
      setCurrChatData(allChat[0]);
    }
  }, [allChat, currChat]);

  const handleChange = (Newvalue: string | undefined) => {
    setCode(Newvalue || "Write Code Here");
  };

  return (
    <>
      <Toaster />
      <div
        id={"scroll"}
        className=" mainpanel flex-1 flex flex-col bg-[#212121] overflow-auto"
      >
        {/*top */}
        <div className="navbar px-6 py-4 bg-[#090a0e] shadow-xl flex justify-between items-center relative z-10">
          <div className="flex items-center space-x-3 text-gray-300">
            <MessageSquare size={18} className="text-indigo-400" />
            <h1 className="bg-[#2f2f2f] px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-gray-100 font-medium w-64 transition-all duration-300">
              {currChatData?.title}
            </h1>
          </div>
          <div className="top-buttons flex gap-4">
            <button
              onClick={() => {
                setErrPop(true);
              }}
              className="flex items-center space-x-2 text-gray-300 bg-gray-700/90 px-3 py-1.5 rounded-lg transition-all duration-300 hover:bg-gray-600/90"
            >
              <Maximize size={20} />
              <span className="font-medium">Show Review</span>
            </button>
          </div>
        </div>

        {/*code Editor */}
        <div className="flex-1 px-4 bg-[#090a0e]">
          <div className="bg-[#2a2a2a] rounded-xl relative">
            {/* Code Editor Top Bar */}
            <div className="flex justify-between items-center px-4 py-2  bg-[#1e1e1e] rounded-t-lg">
              <div className="relative">
                <button
                  onClick={() =>
                    setIsLanguageDropdownOpen(!isLanguageDropdownOpen)
                  }
                  className="flex items-center space-x-2 text-gray-300 hover:text-white bg-[#1f1f1f] px-3 py-1.5 rounded-lg transition-all duration-300 hover:bg-gray-600/50"
                >
                  <span className="font-medium">
                    {languages.find((l) => l.id === language)?.name}
                  </span>
                  <ChevronDown size={16} />
                </button>

                {isLanguageDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-[#23272B] rounded-lg shadow-xl border border-gray-700 py-1 z-50">
                    {languages.map((lang) => (
                      <button
                        key={lang.id}
                        className="flex items-center justify-between w-full px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-600/50 transition-all duration-300"
                        onClick={() => {
                          setLanguage(lang.id);
                          setIsLanguageDropdownOpen(false);
                        }}
                      >
                        <span>{lang.name}</span>

                        {language === lang.id && (
                          <Check size={16} className="text-indigo-400" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={copyToClipboard}
                className="flex items-center space-x-2 text-gray-300  px-3 py-1.5 rounded-lg transition-all duration-300 hover:bg-gray-600/90"
              >
                <Copy size={22} />
              </button>
            </div>

            {/* Code Editor */}
            <div className="editor  bg-[#1e1e1e]">
              <Editor
                value={currChatData?.code}
                defaultLanguage={"javascript"}
                theme="vs-dark"
                height="535px"
                defaultValue="//Loading"
                onChange={handleChange}
                options={{
                  minimap: { enabled: false },
                  scrollbar: {
                    vertical: "hidden",
                  },
                  scrollBeyondLastLine: false,
                  readOnly: false,
                }}
              />
            </div>
          </div>
        </div>
        {/*bottom buttons */}
        <div className="p-4 bg-[#090a0e] shadow-xl border-gray-800/50 relative z-10">
          <button className="w-[45%] mr-[10%] cursor-pointer bg-gradient-to-r from-indigo-600 to-purple-600 text-gray-100 py-3 px-6 rounded-lg hover:opacity-90 transition-all duration-300 font-medium shadow-xl shadow-purple-500/10 active:scale-[0.98] hover:shadow-purple-500/20">
            Highlight Errors
          </button>
          <button
            onClick={() => {
              if (
                currChatData?.code ||
                (code && currChatData?.code !== "//write something here")
              ) {
                setCode(currChatData?.code || " ");
                getGeminiResponse();
                return;
              } else {
                toast.error("Code Is Empty ", {
                  style: {
                    background: "#1F2937",
                    color: "#fff",
                    borderRadius: "0.5rem",
                  },
                  iconTheme: {
                    primary: "#818CF8",
                    secondary: "#1F2937",
                  },
                });
              }
            }}
            className="w-[45%]  bg-gradient-to-r from-indigo-600 to-purple-600 text-gray-100 py-3 px-6 rounded-lg hover:opacity-90 transition-all duration-300 font-medium shadow-xl shadow-purple-500/10 active:scale-[0.98] hover:shadow-purple-500/20"
          >
            Show Errors
          </button>
        </div>
      </div>
    </>
  );
}
