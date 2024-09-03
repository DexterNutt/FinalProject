import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "./components/auth/loginForm/loginSlice";
import mentorDashboardReducer from "./components/mentorDashboard/mentorDashboardSlice";
import registerReducer from "./components/auth/register/registerForm/registerSlice";

const reducer = {
  auth: authReducer,
  register: registerReducer,
  mentorDashboard: mentorDashboardReducer,
};

export default configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
