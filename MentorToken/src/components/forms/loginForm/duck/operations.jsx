import { logInSuccess, logInFailed, logOutUser } from "./actions";
import { LogInUser } from "../../../../api/authApi";

export const logInToApp = (username, password) => {
  return (dispatch) => {
    return LogInUser(username, password)
      .then((res) => {
        dispatch(logInSuccess(res.data));
        return res.data;
      })
      .catch((err) => {
        dispatch(logInFailed("Invalid Credentials"));
        return err;
      });
  };
};

export const logOut = () => {
  return (dispatch) => {
    dispatch(logOutUser());
  };
};
