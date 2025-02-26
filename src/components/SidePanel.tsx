import Top from "./SidePanel/Top";
import Mid from "./SidePanel/Mid";
import Bottom from "./SidePanel/Bottom";

const SidePanel = () => {
  return (
    <>
      <div className="sp h-screen w-1/5 flex flex-col items-stretch">
        <Top />
        <Mid />
        <Bottom />
      </div>
    </>
  );
};

export default SidePanel;
