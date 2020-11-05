import React, { createContext, useContext, useState } from "react";

const ButtonContext = createContext();
const ButtonUpdateContext = createContext();

export const useButton = () => useContext(ButtonContext);
export const useButtonUpdate = () => useContext(ButtonUpdateContext);

const ButtonProvider = ({ children }) => {
  const [ openIngredients, setOpenIngredients ] = useState(false);
  const [ openInstructions, setOpenInstructions ] = useState(false);
  const [ savedClass, setSavedClass ] = useState(false);

  const toggler = ( func, value) => func(!value);

  return (
    <ButtonContext.Provider value={{ openIngredients, openInstructions, savedClass}}>
        <ButtonUpdateContext.Provider value={{ toggler, setOpenIngredients, setOpenInstructions, setSavedClass }}>
          {children}
        </ButtonUpdateContext.Provider>
      </ButtonContext.Provider>
  )
}; 

export default ButtonProvider;