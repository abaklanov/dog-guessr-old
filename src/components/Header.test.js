import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";
import { Navbar } from "react-bootstrap";

const wrapper = shallow(<Header />);

it("renders correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

it("renders Navbar", () => {
  expect(wrapper.find(Navbar)).toHaveLength(1);
});
