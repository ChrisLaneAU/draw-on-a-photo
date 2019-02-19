import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../test/testUtils";
import App from "./App";

const setup = (initialState = {}) => {
  const wrapper = shallow(<App {...initialState} />);
  return wrapper;
};

describe("render", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  it("renders component without error", () => {
    const component = findByTestAttr(wrapper, "component-app");
    expect(component.length).toBe(1);
  });
});
