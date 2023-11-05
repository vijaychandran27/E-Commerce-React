// require('file-loader?name=[name][ext]!./index.html')
// import React from "react";
// import reactDom from "react-dom";
// import APP  from "./App";

// const element = document.getElementById('root');

// reactDom.render(<APP/>, element);
import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Provider } from 'react-redux';
import configureStore from "./ui/store";

import App from "./ui/App";

const store = configureStore();
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);


root.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);