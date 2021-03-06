import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../../../../test/testUtils";
import DrawingModeButtons from "./DrawingModeButtons";

const setup = (initialState = {}) => {
  const wrapper = shallow(<DrawingModeButtons {...initialState} />);
  return wrapper;
};

describe("render", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      icons: [
        {
          icon: "",
          id: ""
        }
      ],
      activeEditModeId: "",
      handleClick: () => {}
    };
    wrapper = setup(initialState);
  });
  it("renders component without error", () => {
    const component = findByTestAttr(wrapper, "component-drawing-mode-buttons");
    expect(component.length).toBe(1);
  });
});

// receives correct props
// runs handleClick
