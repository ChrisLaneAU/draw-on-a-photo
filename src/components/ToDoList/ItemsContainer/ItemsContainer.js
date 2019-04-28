import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  completeToDo,
  showModal,
  setActiveTodo,
  toggleDone
} from "../../../actions";

import Items from "./Items/Items";

import "./ItemsContainer.scss";

export class ItemsContainer extends Component {
  handleDoneClick() {
    const { todoId, todo, toggleDone } = this.props;
    toggleDone(todoId, !todo.done);
  }

  handleDeleteClick = completeToDoId => {
    const { completeToDo } = this.props;
    completeToDo(completeToDoId);
  };

  handleDrawOnThePhotoClick() {
    const { todoId, toDoItemsData } = this.props;
    const todoItem = toDoItemsData[todoId];
    const activeToDo = { ...todoItem, id: todoId };
    this.props.showModal(true);
    this.props.setActiveTodo(activeToDo);
  }

  render() {
    const { todoId, todo, imageIsSaving } = this.props;
    return (
      <Items
        data-test="component-items-container"
        todo={todo}
        todoId={todoId}
        imageIsSaving={imageIsSaving}
        handleDoneClick={() => this.handleDoneClick()}
        handleDrawOnThePhotoClick={() => this.handleDrawOnThePhotoClick()}
      />
    );
  }
}

ItemsContainer.propTypes = {
  todoId: PropTypes.string,
  todo: PropTypes.object,
  toDoItemsData: PropTypes.objectOf(
    PropTypes.shape({
      coOrds: PropTypes.string,
      done: PropTypes.bool.isRequired,
      img: PropTypes.string,
      imgOrig: PropTypes.string,
      title: PropTypes.string.isRequired
    })
  ).isRequired,
  modalVisible: PropTypes.bool.isRequired,
  activeTodo: PropTypes.shape({
    coOrds: PropTypes.string,
    done: PropTypes.bool,
    img: PropTypes.string,
    imgOrig: PropTypes.string,
    title: PropTypes.string
  }),
  imageIsSaving: PropTypes.bool.isRequired,
  completeToDo: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
  setActiveTodo: PropTypes.func.isRequired,
  toggleDone: PropTypes.func.isRequired
};

ItemsContainer.defaultProps = {
  todoId: "",
  todo: {},
  activeTodo: {}
};

const mapStateToProps = ({
  toDoItemsData,
  modalVisible,
  activeTodo,
  imageIsSaving
}) => {
  return {
    toDoItemsData,
    modalVisible,
    activeTodo,
    imageIsSaving
  };
};

export default connect(
  mapStateToProps,
  { completeToDo, showModal, setActiveTodo, toggleDone }
)(ItemsContainer);
