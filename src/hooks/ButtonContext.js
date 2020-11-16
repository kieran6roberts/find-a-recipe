import React, { createContext, useContext, useState } from "react";
import PropTypes from 'prop-types';

const ButtonContext = createContext();
const ButtonUpdateContext = createContext();

export const useButton = () => useContext(ButtonContext);
export const useButtonUpdate = () => useContext(ButtonUpdateContext);

const ButtonProvider = ({ children }) => {
  const [ openIngredients, setOpenIngredients ] = useState(false);
  const [ openInstructions, setOpenInstructions ] = useState(false);
  const [ activeItem, setActiveItem ] = useState("");

  const toggleOpenIngredients = () => setOpenIngredients(!openIngredients);
  const toggleOpenInstructions = () => setOpenInstructions(!openInstructions);
  const toggleActiveItem = (id) => setActiveItem(id);

  return (
    <ButtonContext.Provider value={{ openIngredients, openInstructions, activeItem}}>
        <ButtonUpdateContext.Provider value={{ toggleActiveItem, toggleOpenIngredients, toggleOpenInstructions}}>
          {children}
        </ButtonUpdateContext.Provider>
      </ButtonContext.Provider>
  )
}; 

ButtonProvider.propTypes = {
  children: PropTypes.element.isRequired
};

export default ButtonProvider;