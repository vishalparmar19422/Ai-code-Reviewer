import MainPanel from "./components/MainPanel/MainPanel";
import CodeEditor from "./components/CodeEditor/CodeEditor";
import HomePage from "./components/HomePage/HomePage";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import SidePanel from "./components/SidePanel";

function App() {
  return (
    <>
      <SignedOut>
        <HomePage />
      </SignedOut>
      <SignedIn>
        <div className="bg-black w-screen h-screen flex">
          <SidePanel />
          <MainPanel />
          <CodeEditor />
        </div>
      </SignedIn>
    </>
  );
}

export default App;
