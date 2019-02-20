import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../../../../test/testUtils";
import { PopupButtonsContainer } from "./PopupButtonsContainer";

const setup = (initialState = {}) => {
  const wrapper = shallow(<PopupButtonsContainer {...initialState} />);
  return wrapper;
};

describe("render", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      canvasActiveId: {
        activeModeId: "",
        prevModeId: ""
      },
      popupData: {
        show: false,
        offsetX: 0,
        offsetY: 0,
        width: 0,
        idsWithPopup: ["fillColour"]
      },
      strokeWidth: 5,
      fillColour: "",
      strokeColour: ""
    };
    wrapper = setup(initialState);
  });
  it("renders component without error", () => {
    const component = findByTestAttr(
      wrapper,
      "component-popup-buttons-container"
    );
    expect(component.length).toBe(1);
  });
});

// receives correct redux props
// runs redux actions
