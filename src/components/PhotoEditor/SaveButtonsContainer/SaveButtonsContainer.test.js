import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../../../test/testUtils";
import SaveButtonsContainer from "./SaveButtonsContainer";

const setup = (initialState = {}) => {
  const wrapper = shallow(<SaveButtonsContainer {...initialState} />);
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
        id: "",
        img: "",
        imgOrig: "",
        title: ""
      }
    };
    wrapper = setup(initialState);
  });
  it("renders component without error", () => {
    const component = findByTestAttr(
      wrapper,
      "component-save-buttons-container"
    );
    expect(component.length).toBe(1);
  });
});
