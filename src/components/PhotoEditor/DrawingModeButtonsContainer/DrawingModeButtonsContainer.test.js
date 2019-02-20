import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../../../test/testUtils";
import { DrawingModeButtonsContainer } from "./DrawingModeButtonsContainer";

const setup = (initialState = {}) => {
  const wrapper = shallow(<DrawingModeButtonsContainer {...initialState} />);
  return wrapper;
};

describe("render", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      setActiveEditMode: () => {},
      setCanvasMode: () => {},
      activeModeId: ""
    };
    wrapper = setup(initialState);
  });
  it("renders component without error", () => {
    const component = findByTestAttr(
      wrapper,
      "component-drawing-mode-buttons-container"
    );
    expect(component.length).toBe(1);
  });
});

// receives correct redux props
// runs redux actions
