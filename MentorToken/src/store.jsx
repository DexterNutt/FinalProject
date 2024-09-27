import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "./components/auth/loginForm/loginSlice";
import mentorDashboardReducer from "./components/mentorDashboard/mentorDashboardSlice";
import registerReducer from "./components/auth/register/registerForm/registerSlice";
import startupDashboardReducer from "./components/startupDashboard/startupDashboardSlice";
import searchReducer from "./components/search/searchSlice";

const reducer = {
  auth: authReducer,
  register: registerReducer,
  mentorDashboard: mentorDashboardReducer,
  startupDashboard: startupDashboardReducer,
  search: searchReducer,
};

export default configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
