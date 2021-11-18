import React from "react";
import { Redirect, Route } from "react-router-dom";

export const PublicRoute = ({ exact = false, path, Component, auth }) => {
  return (
    <Route
      exact={exact}
      path={path}
      render={(props) =>
        auth === false ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/dashboard",
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
