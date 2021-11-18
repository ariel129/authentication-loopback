import { Redirect, Route } from "react-router-dom";

export const PrivateRoute = ({ exact, path, Component, auth }) => {
  return (
    <Route
      exact={exact}
      path={path}
      render={(props) =>
        auth === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: {
                requestedPath: path,
              },
            }}
          />
        )
      }
    />
  );
};
