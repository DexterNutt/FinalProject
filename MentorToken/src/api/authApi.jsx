import { api } from "../config/properties";
import axios from "axios";

export const LogInUser = async (email, password) => {
  const header = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, PUT, POST",
    // "Content-Type": "application/json-patch+json",
  };
  const data = {
    email: email,
    password: password,
  };

  try {
    const json = await axios.post(`${api.localRoute}/api/v1/auth/login`, data, {
      headers: header,
    });
    return await Promise.resolve(json);
  } catch (err) {
    return await Promise.reject(err);
  }
};

export const registerUser = async (email, password) => {
  const header = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  const data = { username: email, password: password };
  try {
    const json = await axios.post(`${api.localRoute}/api/v1/auth/register`, {
      headers: header,
      body: data,
    });
    return await Promise.resolve(json);
  } catch (err) {
    return await Promise.reject(err);
  }
};
