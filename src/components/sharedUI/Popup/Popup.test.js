import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../../../test/testUtils";
import Popup from "./Popup";

const setup = (initialState = {}) => {
  const wrapper = shallow(<Popup {...initialState} />);
  return wrapper;
};

describe("render", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      popupData: {
        show: false,
        offsetX: 0,
        offsetY: 0,
        width: 0
      },
      showPopup: function() {}
    };
    wrapper = setup(initialState);
  });
  it("renders component without error", () => {
    const component = findByTestAttr(wrapper, "component-popup");
    expect(component.length).toBe(1);
  });
});

/*describe("click", () => {
  let mockCallBack;
  let wrapper;
  beforeEach(() => {
    // set up mock
    mockCallBack = jest.fn();
    const props = {
      text: "Click me",
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
});*/
