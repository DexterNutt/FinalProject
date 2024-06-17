import { LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT_USER } from "./constants";
import {
  removeUserStorage,
  setUserStorage,
} from "../../../config/StorageFunctions";

const initialState = {
  token: null,
  user: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      const token = action.payload.token;
      const user = action.payload.username;
      setUserStorage(token, user);
      return {
        ...state,
        token: token,
        user: user,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        err: action.payload,
      };
    case LOGOUT_USER:
      removeUserStorage();
      return {
        ...state,
        token: null,
        user: null,
      };
    default:
      return {
        ...state,
      };
  }
}
