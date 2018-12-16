import React from "react";
import { render } from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import reducers from "./reducers.js";

import { createStore, compose } from "redux";

const enhancer = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(reducers, compose(enhancer));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
