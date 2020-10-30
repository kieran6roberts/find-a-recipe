import { useState } from "react";

const useLocalStorage = (storageKey, initialValue ) => {
  const [ storedValue, setStoredValue ] = useState( () => {
    try {
      const item = window.localStorage.getItem(storageKey);
      return item ? JSON.parse(item) : initialValue;
    } catch (err) {
      console.error(err);
      return initialValue;
    }
  });

  const setValue = (value) => {
    if (!value) return;

    try {
      setStoredValue(value);
      window.localStorage.setItem(storageKey, JSON.stringify(value));
    } catch (err) {
      console.error(err);
    }
  };
  return [ storedValue, setValue ];
};

export default useLocalStorage;