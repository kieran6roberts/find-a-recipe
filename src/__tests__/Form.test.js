import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Form from "../containers/Form/Form";
import StorageProvider from "../hooks/StorageContext";

beforeEach( () => {
  jest.clearAllMocks()
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

  test("submit and input change events", async () => {
      const { getByDisplayValue, getByPlaceholderText }  = render(
      <StorageProvider>
        <Form 
        initValues={{ name: ""}}
         />
      </StorageProvider>);

      const input = getByPlaceholderText("thai red curry, pizza etc.");
      const submit = getByDisplayValue("Submit");

      expect(submit).toBeDisabled

      // input change
      fireEvent.change(input, {
        target: {
          value: "pizza"
        }
      });

      //hook is updating input correctly
      expect(input.value).toBe("pizza");

      jest.spyOn(global, "fetch").mockImplementation( () => {
        Promise.resolve({
          json: () => Promise.resolve()
        })
      });

      //submit
      await fireEvent.submit(submit);
      //fetch function is called
      expect(window.fetch).toHaveBeenCalledTimes(1);
      //input is reset
      expect(input.value).toBeFalsy();

      global.fetch.mockRestore();
  });
});