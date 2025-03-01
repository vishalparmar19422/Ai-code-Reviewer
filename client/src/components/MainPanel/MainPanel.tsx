import React, { useEffect, useState } from "react";
import { MessageSquare, ChevronDown, Check, Copy } from "lucide-react";
import CodeEditor from "@uiw/react-textarea-code-editor";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

export default function MainPanel() {
  const [error, setError] = useState(null);
  const [code, setCode] = useState("// Write your code here\n");
  const [sessionName, setSessionName] = useState("Code #1");
  const [language, setLanguage] = useState("js");
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const languages = [
    { id: "js", name: "JavaScript" },
    { id: "cpp", name: "C++" },
    { id: "python", name: "Python" },
    { id: "java", name: "Java" },
  ];

  const API_URL = import.meta.env.VITE_BACKEND_URL;

  const getGeminiResponse = () => {
    axios
      .post(`${API_URL}/reviewcode`, { code })
      .then((res) => {
        setError(res.data.response)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
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
  };

  const handleSessionNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSessionName(e.target.value);
  };
  return (
    <>
      <Toaster />
      <div
        id={"scroll"}
        className=" mainpanel flex-1 flex flex-col bg-[#212121] overflow-auto"
      >
        <div className="navbar px-6 py-4 bg-[#090a0e] shadow-xl flex justify-between items-center relative z-10">
          <div className="flex items-center space-x-3 text-gray-300">
            <MessageSquare size={18} className="text-indigo-400" />
            <input
              type="text"
              placeholder="Enter Code Title"
              value={sessionName}
              onChange={handleSessionNameChange}
              className="bg-[#2f2f2f] px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-gray-100 font-medium w-64 transition-all duration-300"
            />
          </div>
        </div>

        <div className="flex-1 px-4 bg-[#090a0e]">
          <div className="bg-[#2f2f2f] rounded-xl shadow-2xl shadow-gray-500/5 border border-gray-800/50 relative">
            {/* Code Editor Top Bar */}
            <div className=" flex justify-between items-center px-4 py-1 border-b border-gray-800/50">
              <div className="relative">
                <button
                  onClick={() =>
                    setIsLanguageDropdownOpen(!isLanguageDropdownOpen)
                  }
                  className="flex items-center space-x-2 text-gray-400 hover:text-gray-100 bg-gray-800/30 px-3 py-1.5 rounded-lg transition-all duration-300 hover:bg-gray-700/50"
                >
                  <span className="font-medium">
                    {languages.find((l) => l.id === language)?.name}
                  </span>
                  <ChevronDown size={16} />
                </button>

                {isLanguageDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-[#1A1D24] rounded-lg shadow-xl border border-gray-800/50 py-1 z-50">
                    {languages.map((lang) => (
                      <button
                        key={lang.id}
                        className="flex items-center justify-between w-full px-4 py-2 text-gray-400 hover:text-gray-100 hover:bg-gray-800/50 transition-all duration-300"
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
                className="flex items-center space-x-2 text-gray-400 hover:text-gray-100 bg-gray-800/30 px-3 py-1.5 rounded-lg transition-all duration-300 hover:bg-gray-700/50"
              >
                <Copy size={16} />
                <span className="font-medium">Copy</span>
              </button>
            </div>
            <CodeEditor
              value={code}
              className="scroll "
              language={language}
              placeholder="Please enter your code."
              onChange={(evn) => setCode(evn.target.value)}
              padding={20}
              style={{
                fontSize: 14,
                backgroundColor: "#0d0d0d",
                fontFamily:
                  "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
                borderRadius: "0.75rem",
                // minHeight: "calc(100vh - 230px)",
                overflow: "auto",
                resize: "none",
                height: "535px",
                color: "#e5e7eb",
              }}
              data-color-mode="dark"
            />
          </div>
        </div>

        <div className="p-4 bg-[#090a0e] shadow-xl border-gray-800/50 relative z-10">
          <button className="w-[45%] mr-[10%] cursor-pointer bg-gradient-to-r from-indigo-600 to-purple-600 text-gray-100 py-3 px-6 rounded-lg hover:opacity-90 transition-all duration-300 font-medium shadow-xl shadow-purple-500/10 active:scale-[0.98] hover:shadow-purple-500/20">
            Highlight Errors
          </button>
          <button
            onClick={getGeminiResponse}
            className="w-[45%]  bg-gradient-to-r from-indigo-600 to-purple-600 text-gray-100 py-3 px-6 rounded-lg hover:opacity-90 transition-all duration-300 font-medium shadow-xl shadow-purple-500/10 active:scale-[0.98] hover:shadow-purple-500/20"
          >
            Show Errors
          </button>
        </div>
      </div>
    </>
  );
}
