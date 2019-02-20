import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../../../../test/testUtils";
import Items from "./Items";

const setup = (initialState = {}) => {
  const wrapper = shallow(<Items {...initialState} />);
  return wrapper;
};

describe("render", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      imageIsSaving: false,
      todoId: "testId",
      todo: {
        coOrds: "",
        done: false,
        img: "",
        imgOrig: "",
        title: "A to-do item"
      },
      handleDoneClick: () => {},
      handleDrawOnThePhotoClick: () => {}
    };
    wrapper = setup(initialState);
  });
  it("renders component without error", () => {
    const component = findByTestAttr(wrapper, "component-items");
    expect(component.length).toBe(1);
  });
});
