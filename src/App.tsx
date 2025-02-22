import { useState } from "react";
import SidePanel from "./components/SidePanel";

import "./App.css";
import { minimalSetup, EditorView } from "codemirror";
import { javascript } from "@codemirror/lang-javascript";

function App() {
  return (
    <>
    <div className="bg-black w-screen h-screen">
    <SidePanel/>
    </div>
    </>
  );
}

export default App;
