import React from "react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom/extend-expect";
import Dashboard from "../components/Dashboard";
import { add } from "../components/Dashboard";
import {
  render,
  fireEvent,
  cleanup,
  getByTestId
} from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";

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
