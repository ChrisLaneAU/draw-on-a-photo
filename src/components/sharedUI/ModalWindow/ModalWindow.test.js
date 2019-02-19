import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from ",,/../../test/testUtils";
import ModalWindow from "./ModalWindow";

const setup = (initialState = {}) => {
  const wrapper = shallow(<ModalWindow {...initialState} />);
  return wrapper;
};

describe("render", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      showModal: function() {},
      children: <div />
    };
    wrapper = setup(initialState);
  });
  it("renders component without error", () => {
    const component = findByTestAttr(wrapper, "component-modal-window");
    expect(component.length).toBe(1);
  });
});

describe("close click", () => {
  let mockCallBack;
  let wrapper;
  beforeEach(() => {
    // set up mock
    mockCallBack = jest.fn();
    const props = {
      showModal: mockCallBack
    };

    // set up Button component with mockCallBack as prop
    wrapper = shallow(<ModalWindow {...props} />);

    // Simulate click on button
    const button = findByTestAttr(
      wrapper,
      "component-modal-window-button-close"
    );
    button.simulate("click", { preventDefault() {} });
  });
  it("calls showModal() on click of close button", () => {
    // check to see if mock ran
    const callCount = mockCallBack.mock.calls.length;
    expect(callCount).toBe(1);
  });
});
