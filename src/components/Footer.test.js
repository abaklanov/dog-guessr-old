import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";
import { Button } from "react-bootstrap";

const wrapper = shallow(<Footer />);

it("renders correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

it("displays Skip button", () => {
  const button = wrapper.find(Button).find("#skip");
  expect(button).toHaveLength(1);
});
