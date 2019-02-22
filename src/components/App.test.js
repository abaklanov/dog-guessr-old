import React from "react";
import { shallow } from "enzyme";
import App from "./App";

const app = shallow(<App />);

it("renders correctly", () => {
  expect(app).toMatchSnapshot();
});

it("initializes a `state` with an empty photos property", () => {
  expect(app.state().photos).toEqual([]);
});
