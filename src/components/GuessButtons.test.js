import React from "react";
import { shallow, mount } from "enzyme";
import GuessButtons from "./GuessButtons";
import { Button } from "react-bootstrap";

const wrapper = shallow(<GuessButtons />);

jest.mock("axios", () => {
  return {
    get: () =>
      Promise.resolve({
        status: 200,
        data: {
          status: "success",
          message: [
            "affenpinscher",
            "african",
            "airedale",
            "akita",
            "appenzeller",
            "basenji",
            "beagle",
            "bluetick",
            "borzoi",
            "bouvier",
            "boxer",
            "brabancon",
            "briard",
            "bulldog",
            "bullterrier",
            "cairn",
            "cattledog",
            "chihuahua",
            "chow",
            "clumber",
            "cockapoo",
            "collie",
            "coonhound",
            "corgi",
            "cotondetulear",
            "dachshund",
            "dalmatian",
            "dane",
            "deerhound",
            "dhole",
            "dingo",
            "doberman",
            "elkhound",
            "entlebucher",
            "eskimo",
            "frise",
            "germanshepherd",
            "greyhound",
            "groenendael",
            "hound",
            "husky",
            "keeshond",
            "kelpie",
            "komondor",
            "kuvasz",
            "labrador",
            "leonberg",
            "lhasa",
            "malamute",
            "malinois",
            "maltese",
            "mastiff",
            "mexicanhairless",
            "mix",
            "mountain",
            "newfoundland",
            "otterhound",
            "papillon",
            "pekinese",
            "pembroke",
            "pinscher",
            "pointer",
            "pomeranian",
            "poodle",
            "pug",
            "puggle",
            "pyrenees",
            "redbone",
            "retriever",
            "ridgeback",
            "rottweiler",
            "saluki",
            "samoyed",
            "schipperke",
            "schnauzer",
            "setter",
            "sheepdog",
            "shiba",
            "shihtzu",
            "spaniel",
            "springer",
            "stbernard",
            "terrier",
            "vizsla",
            "weimaraner",
            "whippet",
            "wolfhound"
          ]
        }
      })
  };
});
it("renders correctly", () => {
  // TODO: Fix as breed name changes
  //expect(wrapper).toMatchSnapshot();
});

it("gets a breed being guessed as a prop", () => {
  // TODO: implement
});

it("stores schema of button properties with their variant, answer", () => {
  expect(wrapper.state().schema).toHaveLength(4);
});

it("shows four buttons with breed names on it", () => {
  const guessButtons = wrapper.find(Button).find(".guessBtn");
  expect(guessButtons).toHaveLength(4);

  // TODO: check texts
});

describe("when button clicked", () => {
  beforeEach(() => {
    wrapper.setState({
      schema: [
        { btnVariant: "light", isCorrect: false, answer: "akita" },
        { btnVariant: "light", isCorrect: true, answer: "corgi" },
        { btnVariant: "light", isCorrect: false, answer: "beagle" },
        { btnVariant: "light", isCorrect: false, answer: "spaniel" }
      ]
    });
  });

  it("it turns button color green in case of success", () => {
    let btn = wrapper.find(Button).at(1);

    btn.simulate("click");
    expect(wrapper.state().schema[1].btnVariant).toBe("success");

    wrapper.update();
    btn = wrapper.find(Button).at(1);
    expect(btn.prop("variant")).toBe("success");
  });
  it("red otherwise", () => {
    let btn = wrapper.find(Button).at(2);

    btn.simulate("click");
    expect(wrapper.state().schema[2].btnVariant).toBe("danger");

    wrapper.update();
    btn = wrapper.find(Button).at(2);
    expect(btn.prop("variant")).toBe("danger");
  });
  it("disables all buttons after the answer", () => {
    let buttons = wrapper.find(Button);
    let btn = buttons.at(2);

    btn.simulate("click");
    wrapper.update();
    buttons = wrapper.find(Button).forEach(node => {
      expect(node.prop("disabled")).toEqual("disabled");
    });
  });
  it("redirects to the next round in 3 seconds", () => {
    jest.useFakeTimers();
    let btn = wrapper.find(Button).at(2);

    btn.simulate("click");
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 3000);
  });
});
