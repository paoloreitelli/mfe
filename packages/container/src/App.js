import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import Header from "./components/Header";
import Progress from "./components/Progress";

const classNameGenerator = createGenerateClassName({
  productionPrefix: "cnt",
});

const MarketingLazy = lazy(() => import("./components/MarketingApp"));
const AuthLazy = lazy(() => import("./components/AuthApp"));

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={classNameGenerator}>
        <div>
          <Header
            signedIn={isSignedIn}
            onSignOut={() => setIsSignedIn(false)}
          ></Header>
          <Suspense fallback={<Progress></Progress>}>
            <Switch>
              <Route path="/auth">
                <AuthLazy onSignIn={() => setIsSignedIn(true)} />
              </Route>
              <Route path="/" component={MarketingLazy} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
