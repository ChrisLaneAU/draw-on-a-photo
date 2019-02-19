import React from "react";
import { shallow, mount } from "enzyme";

import { findByTestAttr } from "../../../test/testUtils";
import { ToDoList } from "./ToDoList";

const setup = (initialState = {}) => {
  const wrapper = mount(<ToDoList {...initialState} />);
  return wrapper;
};

describe("render", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      fetchToDos: function() {}
    };
    wrapper = setup(initialState);
  });
  it("renders component without error", () => {
    const component = findByTestAttr(wrapper, "component-to-do-list");
    expect(component.length).toBe(1);
  });
});
