import React from "react";
import { shallow } from "enzyme";
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

it("stores 4 possible answers", () => {
  expect(wrapper.state().possibleGuesses).toHaveLength(4);
});

it("shows four buttons with breed names on it", () => {
  const guessButtons = wrapper.find(Button).find(".guessBtn");
  expect(guessButtons).toHaveLength(4);

  // TODO: check texts
});
