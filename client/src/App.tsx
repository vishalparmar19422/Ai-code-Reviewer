import SidePanel from "./components/SidePanel";

import "./App.css";
import MainPanel from "./components/MainPanel/MainPanel";

function App() {
  return (
    <>
      <div className="bg-black w-screen h-screen flex">
        <SidePanel />
        <MainPanel />
      </div>
    </>
  );
}

export default App;
