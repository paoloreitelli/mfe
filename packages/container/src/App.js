import React from "react";
import { BrowserRouter } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";

const classNameGenerator = createGenerateClassName({
  productionPrefix: "cnt",
});

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={classNameGenerator}>
        <div>
          <Header></Header>
          <MarketingApp></MarketingApp>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
