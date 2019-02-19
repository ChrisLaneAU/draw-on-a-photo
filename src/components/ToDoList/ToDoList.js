import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import * as actions from "../../actions";

import ItemsContainer from "./ItemsContainer/ItemsContainer";
import ModalWindow from "../sharedUI/ModalWindow/ModalWindow";
import PhotoEditor from "../PhotoEditor/PhotoEditor";

import "./ToDoList.scss";

export class ToDoList extends Component {
  renderToDos() {
    const { toDoItemsData } = this.props;

    const toDos = _.map(toDoItemsData, (item, id) => {
      return (
        <Fragment key={id}>
          <ItemsContainer todoId={id} todo={item} />
        </Fragment>
      );
    });
    if (!_.isEmpty(toDos)) {
      return toDos;
    }
    return (
      <>
        <h4 style={{ textAlign: "center" }}>Loading...</h4>
      </>
    );
  }

  componentDidMount() {
    this.props.fetchToDos();
  }

  render() {
    const { modalVisible, showModal } = this.props;
    return (
      <>
        <div data-test="component-to-do-list" className="to-do-list-container">
          <ul className="row">{this.renderToDos()}</ul>
        </div>
        {modalVisible ? (
          <ModalWindow showModal={show => showModal(show)}>
            <PhotoEditor />
          </ModalWindow>
        ) : (
          <div />
        )}
      </>
    );
  }
}

const mapStateToProps = ({
  toDoItemsData,
  modalVisible,
  canvas,
  strokeColour,
  fillColour,
  strokeWidth
}) => {
  return {
    toDoItemsData,
    modalVisible,
    canvas,
    strokeColour,
    fillColour,
    strokeWidth
  };
};

export default connect(
  mapStateToProps,
  actions
)(ToDoList);
