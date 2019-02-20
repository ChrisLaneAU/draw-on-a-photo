import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../../test/testUtils";
import { PhotoEditor } from "./PhotoEditor";

const setup = (initialState = {}) => {
  const wrapper = shallow(<PhotoEditor {...initialState} />);
  return wrapper;
};

describe("render", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      activeTodo: { id: "id" },
      canvas: <canvas />,
      saveImg: function() {},
      showModal: function() {}
    };
    wrapper = setup(initialState);
  });
  it("renders component without error", () => {
    const component = findByTestAttr(wrapper, "component-photo-editor");
    expect(component.length).toBe(1);
  });
});

// receives correct props
// updates store correctly
