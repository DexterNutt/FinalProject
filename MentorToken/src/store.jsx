import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "./components/auth/loginForm/loginSlice";

const reducer = {
  auth: authReducer,
  // registerReducer: registerReducer, (assuming you'll refactor the registerReducer similarly)
};

export default configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
