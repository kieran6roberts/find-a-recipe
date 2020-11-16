import React, { createContext, useContext } from "react";
import useStorage from "./useStorage";
import PropTypes from 'prop-types';

const StorageContext = createContext();
const StorageUpdateContext = createContext();

export const useStore = () => {
  return useContext(StorageContext);
};

export const useStoreUpdate = () => {
  return useContext(StorageUpdateContext);
};

const StorageProvider = ({ children }) => {
  const [ storedSession, storedLocal, setResults] = useStorage("results");

  return (
    <StorageContext.Provider value={{ storedLocal, storedSession }}>
      <StorageUpdateContext.Provider value={{ setResults }}>
        {children}
      </StorageUpdateContext.Provider>
    </StorageContext.Provider>
  )
};

StorageProvider.propTypes = {
  children: PropTypes.element.isRequired
};

export default StorageProvider;