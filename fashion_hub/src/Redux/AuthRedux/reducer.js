import { getLocalData, saveLocalData } from "../../Utilities/localstorage";
import * as types from "./actionTypes";

const initialState = {
  isAuth: getLocalData("token") ? true : false,
  token: getLocalData("token") || "",
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  // console.log(payload)
  switch (type) {
    case types.REGISTER_REQUEST:
      return { ...state, isLoading: true };
    case types.REGISTER_SUCCESS:
      return { ...state, isLoading: false };
    case types.REGISTER_FAILURE:
      return { ...state, isLoading: false, isError: true };

    case types.LOGIN_REQUEST:
      return { ...state, isLoading: true };

    case types.LOGIN_SUCCESS:
      saveLocalData("token", payload.token);
      return { ...state, isLoading: false, isAuth: true, token: payload.token };
      
    case types.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isAuth: false,
        token: "",
      };
    default:
      return state;
  }
};
export { reducer };