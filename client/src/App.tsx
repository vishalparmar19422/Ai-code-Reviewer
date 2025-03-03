import SidePanel from "./components/SidePanel";
import "./App.css";
import MainPanel from "./components/MainPanel/MainPanel";
import { motion } from "framer-motion";
import { useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Minimize2 } from "lucide-react";

function App() {
  const [value, setValue] = useState<string>("hello");
  const [errPop, setErrPop] = useState(false);
  const [isMin, setIsMin] = useState(false);

  return (
    <>
      {errPop ? (
        <motion.div
          drag
          dragConstraints={{ left: -1200, right: 1200, top: -600, bottom: 600 }}
          className={`${isMin? "hidden": "block"} pop text-white bg-[#2e2e38] rounded-md fixed right-[10%] left-[10%] bottom-[10%] top-[10%] z-20 cursor-grab overflow-y-auto max-h-[80vh] p-4`}
        >
          <div className="flex justify-between items-center mb-2">
            <div className="text-sm text-gray-300">Errors</div>
            <button
            onClick={()=>setIsMin(true)}
              className="text-gray-300 hover:text-white p-1 rounded-full hover:bg-[#3e3e48] transition-colors"
              aria-label="Minimize"
            >
              <Minimize2 size={18} />
            </button>
          </div>
          <div className="prose">
            <Markdown remarkPlugins={[remarkGfm]}>{value}</Markdown>
          </div>
        </motion.div>
      ) : (
        ""
      )}

      <div className="bg-black w-screen h-screen flex ">
        <SidePanel />
        <MainPanel
          value={value}
          setValue={setValue}
          errPop={errPop}
          setErrPop={setErrPop}
        />
      </div>
    </>
  );
}

export default App;
