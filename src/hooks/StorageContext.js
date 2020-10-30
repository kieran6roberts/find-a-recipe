import React, { createContext, useContext } from "react";
import useSessionStorage from "./useSessionStorage";
import useLocalStorage from "./useLocalStorage";

const StorageContext = createContext();
const StorageUpdateContext = createContext();

export const useStorage = () => {
  return useContext(StorageContext);
};

export const useStorageUpdate = () => {
  return useContext(StorageUpdateContext);
};

const StorageProvider = ({ children }) => {
  const [ sessionResults, setSessionResults ] = useSessionStorage("searchResults");
  const [ localResults, setLocalResults ] = useLocalStorage("savedResults");

  return (
    <StorageContext.Provider value={{ sessionResults, localResults }}>
      <StorageUpdateContext.Provider value={{ setSessionResults, setLocalResults }}>
        {children}
      </StorageUpdateContext.Provider>
    </StorageContext.Provider>
  )
};

export default StorageProvider;