import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const store = createStore(
  reducers,
  {
    activeEditModeId: "freeDraw",
    canvasActiveId: {
      activeModeId: "freeDraw",
      prevModeId: "freeDraw"
    },
    fillColour: "transparent",
    modalVisible: false,
    popupData: { show: false, idsWithPopup: [] },
    imageIsSaving: false,
    strokeColour: "#ff0000",
    strokeWidth: 5
  },
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
