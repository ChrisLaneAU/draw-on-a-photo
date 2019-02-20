import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../../../../test/testUtils";
import SaveButtons from "./SaveButtons";

const setup = (initialState = {}) => {
  const wrapper = shallow(<SaveButtons {...initialState} />);
  return wrapper;
};

describe("render", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      buttons: [
        {
          id: "testId",
          content: "Click me",
          classNames: "",
          handleClick: () => {},
          color: ""
        }
      ]
    };
    wrapper = setup(initialState);
  });
  it("renders component without error", () => {
    const component = findByTestAttr(wrapper, "component-save-buttons");
    expect(component.length).toBe(1);
  });
});
