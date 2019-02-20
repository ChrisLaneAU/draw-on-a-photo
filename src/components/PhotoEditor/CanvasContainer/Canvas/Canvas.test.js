import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../../../../test/testUtils";
import Canvas from "./Canvas";

const setup = (initialState = {}) => {
  const wrapper = shallow(<Canvas {...initialState} />);
  return wrapper;
};

describe("render", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      fabric: { version: "2.4.3" },
      activeTodo: {
        coOrds: "",
        done: false,
        img: "",
        imgOrig: "",
        title: "A to-do item"
      },
      setCanvas: () => {},
      canvasConfig: () => {},
      createArrowType: () => {},
      handleChangeCanvas: () => {}
    };
    wrapper = setup(initialState);
  });
  it("renders component without error", () => {
    const component = findByTestAttr(wrapper, "component-canvas");
    expect(component.length).toBe(1);
  });
});
