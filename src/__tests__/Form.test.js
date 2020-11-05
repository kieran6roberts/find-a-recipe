import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Form from "../containers/Form/Form";
import StorageProvider from "../hooks/StorageContext";

beforeEach( () => {
  render(
    <StorageProvider>
      <Form />
    </StorageProvider>
  )
});

describe("<Form />", () => {
  test("renders", () => {
    screen.debug();
  });
});