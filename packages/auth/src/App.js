import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import Signin from "./components/Signin";
import Signup from "./components/Signup";
import SignUp from "./components/Signup";

const classNameGenerator = createGenerateClassName({
  productionPrefix: "auth",
});

export default ({ history, onSignIn }) => {
  return (
    <div>
      <StylesProvider generateClassName={classNameGenerator}>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signin">
              <Signin onSignIn={onSignIn}></Signin>
            </Route>
            <Route path="/auth/signup">
              <SignUp onSignIn={onSignIn}></SignUp>
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
