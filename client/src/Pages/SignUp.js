import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Input } from "reactstrap";
import KeyVariantIcon from "mdi-react/KeyVariantIcon";
import AccountOutlineIcon from "mdi-react/AccountOutlineIcon";

import { useSignUpQuery } from "./hooks";

export const SignUp = () => {
  const history = useHistory();
  const mutation = useSignUpQuery();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { isSuccess } = mutation;

  const onChange = (name) => (e) => {
    setUser({ ...user, [name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(user);
  };

  if (isSuccess === true) {
    history.push("/signin");
  }

  return (
    <div className="container-main">
      <div className="wrapper">
        <div className="login-card">
          <div className="login-header">
            <h3 className="login-title">Sign Up</h3>
          </div>
          <form className="form">
            <div className="form_form-group">
              <span className="form_form-label">Email</span>
              <div className="form_form-field">
                <div className="form_form-icon">
                  <AccountOutlineIcon />
                </div>
                <Input
                  id="email"
                  value={user.email}
                  type="text"
                  placeholder="Email"
                  onChange={onChange("email")}
                />
              </div>
            </div>
            <div className="form_form-group">
              <span className="form_form-label">Password</span>
              <div className="form_form-field">
                <div className="form_form-icon">
                  <KeyVariantIcon />
                </div>
                <Input
                  id="password"
                  value={user.password}
                  type="password"
                  placeholder="Password"
                  onChange={onChange("password")}
                />
              </div>
            </div>
            <NavLink
              className="btn btn-primary login__btn account__btn--small"
              to=""
              onClick={onSubmit}
            >
              Create
            </NavLink>
            <NavLink
              className="btn btn-outline-primary login__btn"
              to="/signin"
            >
              Sign In
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};
