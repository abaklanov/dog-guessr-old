import React from "react";
import { shallow } from "enzyme";
import GuessButtons from "./GuessButtons";

const wrapper = shallow(<GuessButtons />);

it("renders correctly", () => {
  expect(wrapper).toMatchSnapshot();
});
