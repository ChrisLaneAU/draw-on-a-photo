import React, { Component } from "react";
import DrawOnAPhoto from "./components/DrawOnAPhoto";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowsAlt,
  faPencilAlt,
  faCircle,
  faPlay,
  faSquare,
  faLongArrowAltRight,
  faMinus,
  faTint,
  faSignal,
  faTrash,
  faBan,
  faSyncAlt,
  faTimes
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faArrowsAlt,
  faPencilAlt,
  faCircle,
  faPlay,
  faSquare,
  faLongArrowAltRight,
  faMinus,
  faTint,
  faSignal,
  faTrash,
  faBan,
  faSyncAlt,
  faTimes
);

class App extends Component {
  render() {
    return (
      <div className="container">
        <DrawOnAPhoto />
      </div>
    );
  }
}

export default App;
