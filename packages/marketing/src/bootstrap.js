import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createMemoryHistory, createBrowserHistory } from "history";

//Mount function to startup the App
const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });

  if (onNavigate) history.listen(onNavigate);
  ReactDOM.render(<App history={history}></App>, el);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;
      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

//If we are in development and  isolation call immediatly the mount
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#marketing-development");
  if (devRoot) mount(devRoot, { defaultHistory: createBrowserHistory() });
}
export { mount };
