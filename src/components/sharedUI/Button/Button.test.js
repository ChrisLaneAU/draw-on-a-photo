import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../../../test/testUtils";
import Button from "./Button";

const setup = (initialState = {}) => {
  const wrapper = shallow(<Button {...initialState} />);
  return wrapper;
};

describe("render", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      content: "Click me",
      handleClick: function() {},
      classes: "button",
      color: "grey"
    };
    wrapper = setup(initialState);
  });
  it("renders component without error", () => {
    const component = findByTestAttr(wrapper, "component-button");
    expect(component.length).toBe(1);
  });
});

describe("click", () => {
  let mockCallBack;
  let wrapper;
  beforeEach(() => {
    // set up mock
    mockCallBack = jest.fn();
    const props = {
      content: "Click me",
      handleClick: mockCallBack,
      color: "grey"
    };

    // set up Button component with mockCallBack as prop
    wrapper = shallow(<Button {...props} />);

    // Simulate click on button
    const button = findByTestAttr(wrapper, "component-button");
    button.simulate("click", { preventDefault() {} });
  });
  it("calls handleClick function on click event", () => {
    // check to see if mock ran
    const callCount = mockCallBack.mock.calls.length;
    expect(callCount).toBe(1);
  });
});
