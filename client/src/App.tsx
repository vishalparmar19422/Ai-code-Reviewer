import SidePanel from "./components/SidePanel";
import "./App.css";
import MainPanel from "./components/MainPanel/MainPanel";
import { motion } from "framer-motion";
import { useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

function App() {
  const [value, setValue] = useState<string>("hello");
  return (
    <>
      <motion.div
        drag
        dragConstraints={{ left: -1200, right: 1200, top: -600, bottom: 600 }}
        className="text-white bg-[#2e2e38] rounded-md fixed right-[10%] left-[10%] bottom-[10%] top-[10%] z-20 cursor-grab overflow-y-auto max-h-[80vh] p-4"
      >
        <div className="prose">
          <Markdown remarkPlugins={[remarkGfm]}>{value}</Markdown>
        </div>
      </motion.div>

      <div className="bg-black w-screen h-screen flex ">
        <SidePanel />
        <MainPanel value={value} setValue={setValue} />
      </div>
    </>
  );
}

export default App;
