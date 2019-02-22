import React from "react";
import { shallow } from "enzyme";
import DogGuessr from "./DogGuessr";

const wrapper = shallow(<DogGuessr />);

it("renders correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

it("initializes a `state` with an empty photos property", () => {
  expect(wrapper.state().photos).toEqual([]);
});

it("displays a photo of the dog in a div with id `photo`", () => {
  const div = wrapper.find("div#photo");
  expect(div).toHaveLength(1);
});
