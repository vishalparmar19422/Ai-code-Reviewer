import SidePanel from "./components/SidePanel";
import "./App.css";
import MainPanel from "./components/MainPanel/MainPanel";
import { motion } from "framer-motion";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("hello");
  return (
    <>
      <motion.div
        drag
        dragConstraints={{ left: -1200, right: 1200, top: -600, bottom: 600 }}
        className="     resize  cursor-grab fixed right-[10%] z-20 left-[10%] bottom-[10%] rounded-md  top-[10%]  bg-[#2e2e38] flex justify-center items-center"
      >

      </motion.div>

      <div className="bg-black w-screen h-screen flex ">
        <SidePanel />
        <MainPanel  />
      </div>
    </>
  );
}

export default App;
