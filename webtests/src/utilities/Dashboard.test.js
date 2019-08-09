import React from "react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom/extend-expect";
import Dashboard from "../components/Dashboard";
import { add } from "../components/Dashboard";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";

it("dashboard renders", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Dashboard />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("add function", () => {
  expect(add(1, 2)).toBe(3);
  expect(add(1, 7)).toEqual(8);
  expect(add(5, 2)).toBe(7);
});

it("strike", () => {
  // Tests if Dashboard renders
  const { getByText } = render(<Dashboard />);

  // Grabs element with the exact text of strike which is why we use the ^$ syntax
  const strikeButton = getByText(/^strike$/i);

  //Manually click button twice
  fireEvent.click(strikeButton);
  fireEvent.click(strikeButton);

  // Test if button increases strikes to 2
  getByText(/Strikes: 2/);

  // Tests to see if now strikes is 0 according to the logic i setup
  fireEvent.click(strikeButton);
  fireEvent.click(strikeButton);
  getByText(/Strikes: 0/);
});
