import React, { createContext, ReactNode, useState } from "react";

interface Chat {
  code: string;
  codeReview: string;
  createdAt: string; // Or Date if you want to parse it
  id: string;
  title: string;
  updatedAt: string; // Or Date if you want to parse it
  userId: string;
}

interface CodeContextProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  errPop: boolean;
  setErrPop: React.Dispatch<React.SetStateAction<boolean>>;
  handleEmptyValue: (val: string) => boolean;
  allChat: Chat[];
  setAllChat: React.Dispatch<React.SetStateAction<Chat[]>>;
  currChat: string;
  setCurrChat: React.Dispatch<React.SetStateAction<string>>;
  currChatData: Chat | undefined;
  setCurrChatData: React.Dispatch<React.SetStateAction<Chat | undefined>>;
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
  allChat: [],
  setAllChat: () => {},
  currChat: "",
  setCurrChat: () => {},
  currChatData: undefined,
  setCurrChatData: () => {},
});

export const CodeProvider: React.FC<CodeProviderProps> = ({ children }) => {
  const [value, setValue] = useState("");
  const [errPop, setErrPop] = useState(false);
  const [allChat, setAllChat] = useState<Chat[]>([]);
  const [currChat, setCurrChat] = useState<string>("");
  const [currChatData, setCurrChatData] = useState<Chat | undefined>(undefined);

  const handleEmptyValue = (val: string) => {
    const defaultText = "//Write your code here\n";
    if (val == defaultText) {
      return true;
    }
    return false;
  };

  return (
    <CodeContext.Provider
      value={{
        value,
        setValue,
        errPop,
        setErrPop,
        handleEmptyValue,
        allChat,
        setAllChat,
        currChat,
        setCurrChat,
        currChatData,
        setCurrChatData,
      }}
    >
      {" "}
      {children}
    </CodeContext.Provider>
  );
};
