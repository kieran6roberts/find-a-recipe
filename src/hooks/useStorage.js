import { useState } from "react";

const useStorage = (storageKey, initialValue) => {
  const init = type => {
    let item;
      try {
        if (type === "local") item = window.localStorage.getItem(storageKey);
        else if(type === "session") item = window.sessionStorage.getItem(storageKey);
        else return;

        return item ? JSON.parse(item) : initialValue;
      } catch (err) {
        console.error(err);
        return initialValue;
      }
  };

  const [ storedSession, setStoredSession ] = useState(init);
  const [ storedLocal, setStoredLocal ] = useState(init);

  const setValue = (value, type) => {
      try {
        if (type === "local") {
          window.localStorage.setItem(storageKey, JSON.stringify(value));
          setStoredLocal(value);
        } else if (type === "session") {
          window.sessionStorage.setItem(storageKey, JSON.stringify(value));
          setStoredSession(value);
        }
      } catch (err) {
        console.error(err);
      }
  };
  return [ storedSession, storedLocal, setValue ];
};

export default useStorage;