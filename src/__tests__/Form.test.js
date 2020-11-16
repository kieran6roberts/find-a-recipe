import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Form from "../containers/Form/Form";
import StorageProvider from "../hooks/StorageContext";

afterAll( () => {
  jest.clearAllMocks();
  global.fetch.mockRestore();
})

describe("<Form />", () => {
  test("render", () => {
    const { getByLabelText, getByPlaceholderText } = render(
      <StorageProvider>
        <Form />
      </StorageProvider>);

    expect(getByPlaceholderText("thai red curry, pizza etc.")).toBeInTheDocument();
    expect(getByLabelText("keywords:")).toBeInTheDocument();
  });

  test("fetch on submit function", async () => {
      const { getByDisplayValue, getByPlaceholderText }  = render(
      <StorageProvider>
        <Form/>
      </StorageProvider>);
      
      jest.spyOn(global, "fetch").mockImplementation( () => {
        Promise.resolve({
          json: () => Promise.resolve()
        })
      });

      const input = getByPlaceholderText("thai red curry, pizza etc.");
      const submit = getByDisplayValue("Submit");

      await fireEvent.submit(submit);
      expect(window.fetch).toHaveBeenCalledTimes(1);
      expect(input.value).toBeFalsy();
      expect(submit).toBeDisabled();

      await fireEvent.submit(submit);
      await fireEvent.submit(submit);
      expect(window.fetch).toHaveBeenCalledTimes(3);
  });
});