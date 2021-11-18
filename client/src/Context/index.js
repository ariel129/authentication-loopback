import React, { createContext, useEffect, useReducer } from "react";
import { reducer } from "Context/Reducer";
import { initialState } from "Context/State";

export const ContextAPI = createContext();

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState, () => {
    const local = localStorage.getItem("authentication_state");

    return local ? JSON.parse(local) : initialState;
  });

  useEffect(() => {
    localStorage.setItem("authentication_state", JSON.stringify(state));
  }, [state]);

  return (
    <ContextAPI.Provider value={{ state, dispatch }}>
      {children}
    </ContextAPI.Provider>
  );
};
