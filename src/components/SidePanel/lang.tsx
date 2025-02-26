import * as React from "react";

const options = ["JavaScript", "JAVA", "C", "CPP", "PHP", "React Js"];

const Lang = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState(null);
  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };
  return (
    <div className="inline-flex w-full bg-black items-center justify-center mb-2">
      <div className="w-[96%] relative inline-flex rounded-md border-1 border-gray-400">
        <button
          type="button"
          onClick={toggling}
          className="w-[100%] rounded-1-md px-4 py-2 text-white text-center font-xl cursor-pointer "
        >
          {selectedOption || "Select Language"}
        </button>
        <div className="relative">
          <button
            type="button"
            onClick={toggling}
            className=" inline-flex h-full w-10 items-center justify-center rounded-r-md px-2  text-gray-600 cursor-pointer hover:text-gray-700   "
          >
            <svg
              className="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
        {isOpen && (
          <div className="w-[98%] absolute top-6 right-0 z-10 mt-4 min-w-[200px] origin-top-right rounded-md border border-gray-100 bg-[#1c1c1c] shadow-lg ">
            {options.map((option) => (
              <div>
                <button type="button"
                onClick={onOptionClicked(option)}
                key={Math.random()} className="block rounded-lg px-4 py-2 text-sm text-white no-underline hover:bg-zinc-800 cursor-pointer w-full">
                  {option}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Lang;
