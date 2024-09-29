import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "./components/auth/loginForm/loginSlice";
import mentorDashboardReducer from "./components/mentorDashboard/mentorDashboardSlice";
import registerReducer from "./components/auth/register/registerForm/registerSlice";
import startupDashboardReducer from "./components/startupDashboard/startupDashboardSlice";
import searchReducer from "./components/search/searchSlice";
import jobsReducer from "./components/mentorDashboard/jobsSlice";
import applicationsReducer from "./components/mentorDashboard/applicationsSlice";

const reducer = {
  auth: authReducer,
  register: registerReducer,
  mentorDashboard: mentorDashboardReducer,
  startupDashboard: startupDashboardReducer,
  search: searchReducer,
  jobs: jobsReducer,
  applications: applicationsReducer,
};

export default configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
