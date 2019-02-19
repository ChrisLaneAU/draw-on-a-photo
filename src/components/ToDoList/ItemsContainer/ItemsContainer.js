import React, { Component } from "react";
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

const mapStateToProps = ({
  toDoItemsData,
  img,
  modalVisible,
  activeTodo,
  imageIsSaving
}) => {
  return {
    toDoItemsData,
    img,
    modalVisible,
    activeTodo,
    imageIsSaving
  };
};

export default connect(
  mapStateToProps,
  { completeToDo, showModal, setActiveTodo, toggleDone }
)(ItemsContainer);
