import React from "react";

const RecipeContainer = ({ title, children }) => {
  return (
    <>
      <span>{title}</span>
      <ul>
        {children}
      </ul>
    </>
  )
};

export default RecipeContainer;