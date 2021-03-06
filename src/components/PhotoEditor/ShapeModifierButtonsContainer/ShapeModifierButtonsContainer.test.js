import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../../../test/testUtils";
import { ShapeModifierButtonsContainer } from "./ShapeModifierButtonsContainer";

const setup = (initialState = {}) => {
  const wrapper = shallow(<ShapeModifierButtonsContainer {...initialState} />);
  return wrapper;
};

describe("render", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      activeEditModeId: "",
      setPopupData: () => {},
      setCanvasMode: () => {},
      fillColour: "",
      strokeColour: "",
      strokeWidth: 5
    };
    wrapper = setup(initialState);
  });
  it("renders component without error", () => {
    const component = findByTestAttr(
      wrapper,
      "component-shape-modifer-buttons-container"
    );
    expect(component.length).toBe(1);
  });
});

// receives correct redux props
// runs redux actions
