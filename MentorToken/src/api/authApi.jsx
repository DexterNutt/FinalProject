import { api } from "../config/properties";
import axios from "axios";

export const LogInUser = async (email, password) => {
  const header = {
    "Content-Type": "application/json",
    Accept: "application/json",
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

export const registerUser = async (data) => {
  const header = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const requestData = {
    email: data.email,
    password: data.password,
    role: data.role,
    photo: data.photo,
    mentorName: "",
    startupName: "",
    representative: "",
    address: "",
    phone: data.phone,
    skills: data.skills,
    title: data.title,
  };

  if (data.role === "mentor") {
    requestData.mentorName = data.mentorName;
    requestData.skills = data.skills;
    requestData.phone = data.phone;
    requestData.title = data.title;
  } else if (data.role === "startup") {
    requestData.startupName = data.startupName;
    requestData.representative = data.representative;
    requestData.address = data.address;
    requestData.phone = data.phone;
  }

  try {
    const json = await axios.post(
      `${api.localRoute}/api/v1/auth/register`,
      requestData,
      {
        headers: header,
      }
    );
    return await Promise.resolve(json);
  } catch (err) {
    return await Promise.reject(err);
  }
};
