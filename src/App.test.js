import React from "react";
import App from "./App";
import { render, fireEvent } from "@testing-library/react";

describe("App", () => {
  test("should watch input correctly", () => {
    const { getByTestId } = render(<App />);

    fireEvent.input(getByTestId("example"), {
      target: {
        value: "test"
      }
    });

    expect(getByTestId("message").innerHTML).toEqual("Hidden message");
  });

  test("should display correct error message", () => {
    const { getByTestId } = render(<App />);
    const spy = jest.fn();
    getByTestId("submit");

    fireEvent.click(getByTestId("submit"));
    expect(spy).toBeCalled();
  });
});
