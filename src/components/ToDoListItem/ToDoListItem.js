import "./ToDoListItem.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  completeToDo,
  showModal,
  setActiveTodo,
  toggleDone
} from "../../actions";
import Button from "../Button/Button";

class ToDoListItem extends Component {
  handleDoneClick() {
    const { todoId, todo, toggleDone } = this.props;
    toggleDone(todoId, !todo.done);
  }

  handleDeleteClick = completeToDoId => {
    const { completeToDo } = this.props;
    completeToDo(completeToDoId);
  };

  handleDrawOnThePhotoClick() {
    const { todoId } = this.props;
    const todoItem = this.props.data[todoId];
    todoItem.id = todoId;
    this.props.showModal(true);
    this.props.setActiveTodo(todoItem);
  }

  render() {
    const { todoId, todo } = this.props;
    return (
      <div
        key="toDoName"
        className={`to-do-item ${todo.done ? "to-do-item--done" : ""}`}
      >
        {todo.img ? <img src={todo.img} /> : <div />}
        {todo.imgOrig ? (
          <img
            src={todo.imgOrig}
            style={{ height: 0, padding: 0, margin: 0 }}
          />
        ) : (
          <div />
        )}
        <p>{todo.title}</p>
        <div style={{ display: "flex" }}>
          <Button
            onClick={() => this.handleDoneClick()}
            text="Done"
            className="btn btn--grey"
          />
          {todo.img ? (
            <Button
              onClick={() => {
                if (!todo.done) this.handleDrawOnThePhotoClick();
              }}
              text="Draw on the photo"
              className="btn btn--green"
            />
          ) : (
            <div />
          )}
        </div>
        {/*<Button
          onClick={() => this.handleDeleteClick(todoId)}
          text="Delete"
          className="btn btn--red"
        />
          */}
      </div>
    );
  }
}

const mapStateToProps = ({ data, img, modalVisible, activeTodo }) => {
  return {
    data,
    img,
    modalVisible,
    activeTodo
  };
};

export default connect(
  mapStateToProps,
  { completeToDo, showModal, setActiveTodo, toggleDone }
)(ToDoListItem);
