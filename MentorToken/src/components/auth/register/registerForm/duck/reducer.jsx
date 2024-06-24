import {
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  UPDATE_EMAIL,
  UPDATE_ROLE,
  UPDATE_PASSWORD,
  UPDATE_MENTOR_DATA,
  UPDATE_STARTUP_DATA,
} from "./constants";
import { setUserStorage } from "../../../../../config/StorageFunctions";

const initialState = {
  token: null,
  user: null,
  email: "",
  password: "",
  role: "startup",
  mentorData: {},
  startupData: {},
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
    case UPDATE_EMAIL:
      return { ...state, email: action.payload };
    case UPDATE_PASSWORD:
      return { ...state, password: action.payload };
    case UPDATE_ROLE:
      return { ...state, role: action.payload };
    case UPDATE_MENTOR_DATA:
      return { ...state, mentorData: action.payload };
    case UPDATE_STARTUP_DATA:
      return { ...state, startupData: action.payload };
  }
  return {
    ...state,
  };
}
