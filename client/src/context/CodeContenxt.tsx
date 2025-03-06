import React, { createContext, ReactNode,  useState } from "react";

interface CodeContextProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  errPop: boolean;
  setErrPop: React.Dispatch<React.SetStateAction<boolean>>;
  handleEmptyValue: (val: string) => boolean;
}

interface CodeProviderProps {
  children: ReactNode;
}

export const CodeContext = createContext<CodeContextProps>({
    value: "",
    setValue: () => {},  
    errPop: false,
    setErrPop: () => {},  
    handleEmptyValue: () => false,  
  });
  

export const CodeProvider: React.FC<CodeProviderProps> = ({ children }) => {
  const [value, setValue] = useState<string>("");
  const [errPop, setErrPop] = useState(false);

  const handleEmptyValue = (val: string) => {
    const defaultText = "//Write your code here\n";
    if (!val.trim() || val == defaultText) {
      return true;
    }
    return false;
  };

  return (
    <CodeContext.Provider
      value={{ value, setValue, errPop, setErrPop, handleEmptyValue }}
    >
      {" "}
      {children}
    </CodeContext.Provider>
  );
};
