import React from "react";
import { shallow } from "enzyme";
import DogGuessr from "./DogGuessr";
import axios from "axios";

const wrapper = shallow(<DogGuessr />);

// Setup
const mockData = {
  status: "success",
  message: "https://images.dog.ceo/breeds/samoyed/n02111889_6622.jpg"
};

jest.mock("axios", () => {
  return {
    get: () =>
      Promise.resolve({
        status: 200,
        data: {
          status: "success",
          message: "https://images.dog.ceo/breeds/samoyed/n02111889_6622.jpg"
        }
      })
  };
});

it("renders correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

it("retrieves a random photo from API and sets it to the state when loaded", () => {
  expect(wrapper.state().photo).toEqual(mockData.message);
});

it("displays a photo of the dog in a div with id `photo`", () => {
  const div = wrapper.find("div#photo");
  expect(div).toHaveLength(1);
});
