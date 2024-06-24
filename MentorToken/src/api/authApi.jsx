import { api } from "../config/properties";
import axios from "axios";

export const LogInUser = async (email, password) => {
  const header = {
    "Content-Type": "application/json",
    Accept: "application/json",
    // "Access-Control-Allow-Headers":
    // "Origin, X-Requested-With, Content-Type, Accept",
    // "Access-Control-Allow-Origin": "*",
    // "Access-Control-Allow-Methods": "GET, PUT, POST",
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

export const registerUser = async (
  email,
  password,
  role,
  mentorName,
  startupName,
  representative,
  address
) => {
  const header = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const data = {
    email: email,
    password: password,
    role: role,
  };

  if (role === "mentor") {
    data.mentorName = mentorName;
  } else if (role === "startup") {
    data.startupName = startupName;
    data.representative = representative;
    data.address = address;
  }

  try {
    const json = await axios.post(
      `${api.localRoute}/api/v1/auth/register`,
      data,
      {
        headers: header,
      }
    );
    return await Promise.resolve(json);
  } catch (err) {
    return await Promise.reject(err);
  }
};
