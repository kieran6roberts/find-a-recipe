import React from 'react';
import { screen, render, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";
import RecipeCard from "../components/RecipeCard/RecipeCard";
import ButtonProvider from "../hooks/ButtonContext";

describe("<RecipeCard /> that outputs recipe information", () => {
  test("check empty prop returns no information text content", () => {
    render(
      <ButtonProvider>
        <RecipeCard />
      </ButtonProvider>
      );

    expect(screen.getByText("Ingredients not available for this recipe")).toBeInTheDocument();
    expect(screen.getByText("No instructions for this recipe")).toBeInTheDocument();
  });
  test("snapshot", () => {
    const tree = renderer.create(
      <ButtonProvider>
      <RecipeCard
      id="1"
      title="test title"
      image="img.test"
      save={jest.fn()}
      deleteIcon
      steps={[ {step: "test1", number: "test1"}, {step: "test2", number: "test2"} ]}
      ready="45 minutes"
      ingredients={[ {name: "test 1"}, {name: "test2"}]}
      ></RecipeCard>
    </ButtonProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("check document text based on props", () => {
      render(
        <ButtonProvider>
          <RecipeCard
          id="1"
          title="test title"
          image="img.test"
          save
          deleteIcon
          steps={[ {step: "test1", number: "test1"}, {step: "test2", number: "test2"} ]}
          ready="45 minutes"
          ingredients={[ {name: "test 1"}, {name: "test2"}]}
          ></RecipeCard>
        </ButtonProvider>);

      expect(screen.getByText(/test title/)).toBeInTheDocument();
      expect(screen.getByText("test1")).toBeInTheDocument();
      expect(screen.getByText("test2")).toBeInTheDocument();
      expect(screen.queryByText("No instructions for this recipe")).toBeNull();
      expect(screen.queryByText("Ingredients not available for this recipe")).not.toBeInTheDocument();
    });

    test("click save event", () => {
      const onClick = jest.fn();
      render(
        <ButtonProvider>
          <RecipeCard
            ingredients={[ {name: "test 1"}, {name: "test2"}]}
            steps={[ {step: "test1", number: "test1"}, {step: "test2", number: "test2"} ]}
            save={onClick}
            icon="save">
            </RecipeCard>
        </ButtonProvider>);

      const buttons = screen.queryAllByRole("button")
      fireEvent.click(buttons[0]);
      expect(onClick).toHaveBeenCalledTimes(1);

    });
});