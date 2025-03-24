import "./../../App.css";
import { motion } from "framer-motion";
import { useContext } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Minimize2 } from "lucide-react";
import "github-markdown-css/github-markdown.css";
import { CodeContext } from "../../context/CodeContenxt";

export default function AiReview() {
  const { setErrPop, errPop, currChatData } = useContext(CodeContext);

  return (
    <>
      {errPop && (
        <motion.div
          drag
          dragConstraints={{ left: -1200, right: 1200, top: -600, bottom: 600 }}
          className={`${
            errPop ? "block" : "hidden"
          } text-white bg-[#2e2e38] rounded-md fixed right-[10%] left-[10%] bottom-[10%] top-[10%] z-20 cursor-grab overflow-y-auto max-h-[80vh] p-4`}
        >
          <div className="flex justify-between items-center mb-2">
            <div className="text-gray-300 font-bold text-3xl">Code Review</div>
            <button
              onClick={() => setErrPop(false)}
              className="text-gray-300 hover:text-white p-1 rounded-full hover:bg-[#3e3e48] transition-colors"
              aria-label="Minimize"
            >
              <Minimize2 size={18} />
            </button>
          </div>

          <div className="markdown-body pop h-[92%] w-[100%]">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {currChatData?.codeReview}
            </ReactMarkdown>
          </div>
        </motion.div>
      )}
    </>
  );
}
