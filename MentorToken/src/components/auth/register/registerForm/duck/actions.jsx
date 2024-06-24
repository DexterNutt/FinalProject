import { REGISTER_SUCCESS, REGISTER_FAILED } from "./constants";

export const registerSuccess = (data) => {
  return {
    type: REGISTER_SUCCESS,
    payload: data,
  };
};

export const registerFailed = (err) => {
  return {
    type: REGISTER_FAILED,
    payload: err,
  };
};
