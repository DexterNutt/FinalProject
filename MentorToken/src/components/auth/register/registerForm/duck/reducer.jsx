import { REGISTER_SUCCESS, REGISTER_FAILED } from "./constants";
import { setUserStorage } from "../../../../../config/StorageFunctions";

const initialState = {
  token: null,
  user: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
      const token = action.payload.token;
      const user = action.payload.username;
      setUserStorage(token, user);
      return {
        ...state,
        token: token,
        user: user,
      };
    case REGISTER_FAILED:
      return {
        ...state,
        err: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
