import React, { useContext } from "react";
import { Button } from "reactstrap";

import { ContextAPI } from "Context";
import { useUserInfoQuery } from "./hooks";
import { useHistory } from "react-router-dom";

export const Main = () => {
  const {
    state: { token },
    dispatch,
  } = useContext(ContextAPI);
  const { data, isLoading } = useUserInfoQuery(token);
  const history = useHistory();

  const onLogout = () => {
    dispatch({
      type: "LOGOUT_ACTION",
      payload: "",
    });
    history.push("/");
  };

  return (
    <div className="main">
      <div className="main-wrapper">
        {isLoading === false && <p>User ID: {data}</p>}
        <Button className="btn-logout" color="danger" onClick={onLogout}>
          Logout
        </Button>
      </div>
    </div>
  );
};
