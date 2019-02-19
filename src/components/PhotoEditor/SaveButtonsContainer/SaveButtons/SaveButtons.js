import React from "react";
import PropTypes from "prop-types";

import Button from "../../../sharedUI/Button/Button";

import "./SaveButtons.scss";

const SaveButtons = ({ buttons }) => {
  const renderBtns = () => {
    const saveBtns = buttons.map(btn => {
      const { content, classNames, handleClick, color } = btn;
      return (
        <Button
          content={content}
          key={JSON.stringify(content)}
          classes={`button ${classNames}`}
          handleClick={handleClick}
          color={color}
        />
      );
    });

    return saveBtns;
  };

  return <div data-test="component-save-buttons">{renderBtns()}</div>;
};

SaveButtons.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      content: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
        .isRequired,
      classNames: PropTypes.string.isRequired,
      handleClick: PropTypes.func.isRequired,
      color: PropTypes.string
    })
  )
};

SaveButtons.defaultProps = {
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      id: "",
      color: "grey"
    })
  )
};

export default SaveButtons;
