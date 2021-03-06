import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../../../../../../test/testUtils";
import ColourPickerButton from "./ColourPickerButton";

const setup = (initialState = {}) => {
  const wrapper = shallow(<ColourPickerButton {...initialState} />);
  return wrapper;
};

describe("render", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      classes: "",
      handleColourPickerClick: () => {},
      id: "#ff0000",
      colour: "#ff0000",
      border: "",
      icon: ""
    };
    wrapper = setup(initialState);
  });
  it("renders component without error", () => {
    const component = findByTestAttr(wrapper, "component-colour-picker-button");
    expect(component.length).toBe(1);
  });
});

// receives correct props
// runs actions onClick
