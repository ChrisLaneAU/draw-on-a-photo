import "./DrawOnAPhoto.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import Canvas from "./Canvas/Canvas";
import DrawingButtons from "./Canvas/DrawingButtons/DrawingButtons";
import ModifierButtons from "./Canvas/ModifierButtons/ModifierButtons";
import _ from "lodash";
import * as actions from "../actions";

import { DrawOnAPhoto } from "./DrawOnAPhoto";
import { shallow } from "enzyme";

describe("<DrawOnAPhoto />", () => {
  it("renders one <DrawOnAPhoto />", () => {
    const component = shallow(<DrawOnAPhoto />);
    expect(component).toHaveLength(1);
  });
});
