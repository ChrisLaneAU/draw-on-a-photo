import "./SaveButtons.scss";
import React, { Component } from "react";
import { connect } from "react-redux";

import { saveImg, showModal } from "../../../actions";
import Button from "../../Button/Button";

export class SaveButtons extends Component {
  render() {
    return (
      <div>
        <Button
          onClick={() => {
            const { canvas } = this.props;
            const newSrc = canvas.toDataURL({
              format: "jpeg"
            });
            const { id } = this.props.activeTodo;
            canvas.setBackgroundImage(null, canvas.renderAll.bind(canvas));
            const coOrds = JSON.stringify(canvas);
            this.props.saveImg(newSrc, id, coOrds);
            this.props.showModal(false);
          }}
          text="Save"
          className="btn btn--green"
        />
        <Button
          onClick={() => {
            const { canvas } = this.props;
            const newSrc = canvas.toDataURL({
              format: "jpeg"
            });
            let img = new Image();
            img.src = newSrc;
            window.open("").document.write(img.outerHTML);
          }}
          text="Download"
          className="btn btn--purple"
        />
      </div>
    );
  }
}

const mapStateToProps = ({ activeTodo, canvas }) => {
  return { activeTodo, canvas };
};

export default connect(
  mapStateToProps,
  { saveImg, showModal }
)(SaveButtons);
