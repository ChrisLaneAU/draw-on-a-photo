import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../../../test/testUtils";
import { CanvasContainer } from "./CanvasContainer";

const setup = (initialState = {}) => {
  const wrapper = shallow(<CanvasContainer {...initialState} />);
  return wrapper;
};

describe("render", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      canvas: {},
      activeTodo: {
        coOrds: "",
        done: false,
        img: "",
        imgOrig: "",
        title: "A to-do item"
      },
      canvasActiveId: {
        activeModeId: "",
        prevModeId: ""
      },
      popupData: {
        show: false,
        offsetX: 0,
        offsetY: 0,
        width: 0,
        idsWithPopup: []
      },
      strokeColour: "",
      fillColour: "",
      strokeWidth: 5,
      setCanvas: () => {}
    };
    wrapper = setup(initialState);
  });
  it("renders component without error", () => {
    const component = findByTestAttr(wrapper, "component-canvas-container");
    expect(component.length).toBe(1);
  });
});

// test redux props
// test redux actions
