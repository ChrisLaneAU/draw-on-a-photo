import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../../../../test/testUtils";
import ShapeModifierButtons from "./ShapeModifierButtons";

const setup = (initialState = {}) => {
  const wrapper = shallow(<ShapeModifierButtons {...initialState} />);
  return wrapper;
};

describe("render", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      buttonGroups: {
        group1: [
          {
            icon: "",
            text: "",
            id: "",
            opensPopup: true
          }
        ]
      },
      handleButtonClick: () => {},
      strokeColour: "",
      fillColour: "",
      strokeWidth: 5
    };
    wrapper = setup(initialState);
  });
  it("renders component without error", () => {
    const component = findByTestAttr(
      wrapper,
      "component-shape-modifer-buttons"
    );
    expect(component.length).toBe(1);
  });
});

// receives correct props
// runs actions onClick
