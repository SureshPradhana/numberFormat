import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  const testCases = [
    { input: "1234567890", expected: "(123) 456-7890" },
    { input: "9998887777", expected: "(999) 888-7777" },
    { input: "5551112222", expected: "(555) 111-2222" },
    { input: "123456", expected: "(123) 456-" },
    { input: "9998887", expected: "(999) 888-7" },
    { input: "555111222", expected: "(555) 111-222" },
  ];
  testCases.forEach((testCase) => {
    test("input value should update the label content", () => {
      render(<App />);
      const input = screen.getByPlaceholderText("Mobile number");
      const inputValue = testCase.input;
      fireEvent.change(input, { target: { value: inputValue } });
      const label = screen.getByTestId("phone-label");
      expect(label.textContent).toBe(testCase.expected);
    });
  });
});
