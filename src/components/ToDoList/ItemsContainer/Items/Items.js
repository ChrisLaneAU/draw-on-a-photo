import React from "react";
import PropTypes from "prop-types";

import Button from "../../../sharedUI/Button/Button";
import ImageSavingOverlay from "../../../sharedUI/ImageSavingOverlay/ImageSavingOverlay";

import "./Items.scss";

const Items = ({
  imageIsSaving,
  todoId,
  todo,
  handleDoneClick,
  handleDrawOnThePhotoClick
}) => {
  const renderImg = src => {
    return (
      <div className="to-do-item__img-container">
        {imageIsSaving ? <ImageSavingOverlay /> : <></>}
        <img src={src} alt="" />
      </div>
    );
  };

  return (
    <li
      key={todoId}
      className={`to-do-item ${todo.done ? "to-do-item--done" : ""}`}
    >
      {todo.img ? renderImg(todo.img) : <></>}
      {todo.imgOrig ? (
        <img
          src={todo.imgOrig}
          alt=""
          style={{ height: 0, padding: 0, margin: 0 }}
        />
      ) : (
        <></>
      )}
      <p>{todo.title}</p>
      <div style={{ display: "flex" }}>
        <Button
          handleClick={() => handleDoneClick()}
          content="Done"
          classes="button button__to-do-item"
          color="grey"
        />
        {todo.img ? (
          <Button
            handleClick={() => {
              if (!todo.done) handleDrawOnThePhotoClick();
            }}
            content="Draw on the photo"
            classes="button button__to-do-item"
            color="green"
          />
        ) : (
          <></>
        )}
      </div>
    </li>
  );
};

Items.propTypes = {
  imageIsSaving: PropTypes.bool.isRequired,
  todoId: PropTypes.string.isRequired,
  todo: PropTypes.shape({
    coOrds: PropTypes.string,
    done: PropTypes.bool,
    img: PropTypes.string,
    imgOrig: PropTypes.string,
    title: PropTypes.string
  }).isRequired,
  handleDoneClick: PropTypes.func.isRequired,
  handleDrawOnThePhotoClick: PropTypes.func.isRequired
};

export default Items;
