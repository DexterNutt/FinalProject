import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { authReducer } from "./components/auth/loginForm/duck";

const reducer = {
  authReducer: authReducer,
};

export default configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
