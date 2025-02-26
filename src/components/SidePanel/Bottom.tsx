import { ArrowRight } from "lucide-react";

const Bottom = () => {
  return (
    <>
      <div className="bottom h-[10%] ">
        <div className="chat w-[98%] h-[60px]  bg-[#1c1c1c] mx-1 my-1 rounded-md flex">
          <input
            type="text"
            className="w-[80%] h-full text-[#9B9B9B] text-lg pl-4 outline-none text-white"
            placeholder="Ask Something..."
          />
          <button className="bg-white w-[13%] h-[40px] m-auto rounded-full hover:bg-gray-300 items-center justify-center flex cursor-pointer">
            <ArrowRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default Bottom;
