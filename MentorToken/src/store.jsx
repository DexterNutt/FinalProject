import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { authReducer } from "./components/auth/loginForm/duck";
import { registerReducer } from "./components/auth/register/registerForm/duck";

const reducer = {
  authReducer: authReducer,
  registerReducer: registerReducer,
};

export default configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
