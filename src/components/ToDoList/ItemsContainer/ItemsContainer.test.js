import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../../../test/testUtils";
import ItemsContainer from "./ItemsContainer";

const setup = (initialState = {}) => {
  const wrapper = shallow(<ItemsContainer {...initialState} />);
  return wrapper;
};

describe("render", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {};
    wrapper = setup(initialState);
  });
  it("renders component without error", () => {
    const component = findByTestAttr(wrapper, "component-items-container");
    expect(component.length).toBe(1);
  });
});
