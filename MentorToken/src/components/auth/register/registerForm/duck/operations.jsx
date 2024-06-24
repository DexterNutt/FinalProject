import { registerSuccess, registerFailed } from "./actions";
import { registerUser } from "../../../../../api/authApi";

export const registerToApp = (
  email,
  password,
  role,
  mentorName,
  startupName,
  representative,
  address
) => {
  return (dispatch) => {
    return registerUser(
      email,
      password,
      role,
      mentorName,
      startupName,
      representative,
      address
    )
      .then((res) => {
        dispatch(registerSuccess(res.data));
        return res.data;
      })
      .catch((err) => {
        dispatch(registerFailed("Invalid Data"));
        return err;
      });
  };
};