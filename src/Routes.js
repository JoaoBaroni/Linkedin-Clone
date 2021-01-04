import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import { useSelector } from "react-redux";
import { selectUser } from "./features/counter/userSlice";

function PrivateRoute({ component: Component, isAuth, ...otherProps }) {
  return (
    <Route
      {...otherProps}
      render={(props) =>
        isAuth ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

function PublicRoute({
  component: Component,
  restricted,
  isAuth,
  ...otherProps
}) {
  return (
    <Route
      {...otherProps}
      render={(props) =>
        isAuth && restricted ? (
          <Redirect to="/home" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}

const Routes = () => {
  const user = useSelector(selectUser);

  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute exact path="/login" restricted isAuth={Boolean(user)} component={Login} />
        <PublicRoute exact path="/register" restricted component={Register} />
        <PrivateRoute
          exact
          path="/home"
          component={Home}
          isAuth={Boolean(user)}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
