import { useState } from "react";

const useSessionStorage = (storageKey, initialValue ) => {
  const [ storedValue, setStoredValue ] = useState( () => {
    try {
      const item = window.sessionStorage.getItem(storageKey);
      return item ? JSON.parse(item) : initialValue;
    } catch (err) {
      console.error(err);
      return initialValue;
    }
  });

  const setValue = value => {
    if (!value) return;
    
    try {
      const valueJSON = JSON.stringify(value);
      window.sessionStorage.setItem(storageKey, valueJSON);
      setStoredValue(value);
    } catch (err) {
      console.error(err);
    }
  };
  return [ storedValue, setValue ];
};

export default useSessionStorage;