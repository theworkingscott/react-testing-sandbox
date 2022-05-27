import React from "react";
import Button from "../button";

import { screen, render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

afterEach(cleanup);
it("renders without crashing", () => {
  const div = document.createElement("div");
  render(<Button />, div);
});

it("renders button correctly", () => {
  render(<Button label="save" />);
  expect(screen.getByTestId("button")).toHaveTextContent("save");
});

it("matches snapshot 1", () => {
  const tree = renderer.create(<Button label="save" />).toJSON();
  expect(tree).toMatchSnapshot();
});
it("matches snapshot 2", () => {
  const tree = renderer.create(<Button label="click me please" />).toJSON();
  expect(tree).toMatchSnapshot();
});
