import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/dom";
import "@testing-library/jest-dom/extend-expect";
import Display from "../components/Display";

it("renders", () => {
  const { asFragment } = ReactDOM.render(
    <Display />,
    document.getElementById("root")
  );

  expect(asFragment()).toMatchSnapshot();
});
