import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../../../../../test/testUtils";
import ColourPicker from "./ColourPicker";

const setup = (initialState = {}) => {
  const wrapper = shallow(<ColourPicker {...initialState} />);
  return wrapper;
};

describe("render", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      activeModeId: "",
      handleColourPickerClick: () => {},
      setFillColour: () => {},
      setStrokeColour: () => {},
      setPopupData: () => {},
      strokeColour: "",
      fillColour: ""
    };
    wrapper = setup(initialState);
  });
  it("renders component without error", () => {
    const component = findByTestAttr(wrapper, "component-colour-picker");
    expect(component.length).toBe(1);
  });
});

// receives correct props
// runs actions onClick
