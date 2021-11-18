export const reducer = (state, action) => {
  switch (action.type) {
    case "TOKEN_ACTION":
      return {
        ...state,
        token: action.payload.token,
        auth: action.payload.auth,
      };
    case "LOGOUT_ACTION":
      return {
        ...state,
        token: "",
        auth: false,
      };
    default:
      return state;
  }
};
