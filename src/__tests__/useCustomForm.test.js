import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Form from "../containers/Form/Form";
import StorageProvider from "../hooks/StorageContext";

beforeEach( () => {
  jest.clearAllMocks();
})

describe("UseCustomForm hook", () => {
  test("test hook using <Form />", () => {
    render(
      <StorageProvider>
        <Form />
      </StorageProvider>);
  });
  test("change handler", () => {
    const { getByDisplayValue, getByPlaceholderText }  = render(
    <StorageProvider>
      <Form/>
    </StorageProvider>);

    const input = getByPlaceholderText("thai red curry, pizza etc.");
    const submit = getByDisplayValue("Submit");

    expect(submit).toBeDisabled();

    fireEvent.change(input, {
      target: {
        value: "pizza"
      }
    });

    expect(submit).not.toBeDisabled();
    expect(input.value).toBe("pizza");
    });
});