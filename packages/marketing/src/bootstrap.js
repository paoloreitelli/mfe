import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//Mount function to startup the App
const mount = (el) => {
  ReactDOM.render(<App></App>, el);
};

//If we are in development and  isolation call immediatly the mount
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#marketing-development");
  if (devRoot) mount(devRoot);
}
export { mount };
