"use client";
import { createContext, useContext, useState } from "react";

const MyContext = createContext();
export const MyContextProvider = ({ children }) => {
  const [modalStatus, setModal] = useState(true);
  const [itemStatus, setItem] = useState(false);

  return (
    <MyContext.Provider value={{ modalStatus, setModal }}>
      {children}
    </MyContext.Provider>
  );
};
export const useModal = () => {
  return useContext(MyContext);
};
