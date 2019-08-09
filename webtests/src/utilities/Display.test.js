import React from "react";
import ReactDOM from "react-dom";
import {
  render,
  fireEvent,
  cleanup,
  getByTestId
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Display from "../components/Display";

it("display renders", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Display />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("App loads with initial state of 0", () => {
  const display = render(<Display balls={0} strikes={0} />);
  display.getByText(/Balls: 0/);
  display.getByText(/Strikes: 0/);
});
