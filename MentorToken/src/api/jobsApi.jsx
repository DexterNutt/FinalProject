import axios from "axios";
import { api } from "../config/properties";
import { getToken } from "../config/StorageFunctions";

export const fetchJobsFromApp = async () => {
  try {
    const token = getToken();

    const response = await axios.get(`${api.localRoute}/api/v1/jobs`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (err) {
    console.log("Error fetching jobs data:", err.message);
    throw err;
  }
};

export const searchJobsFromApp = async (searchTerm) => {
  try {
    const token = getToken();

    const response = await axios.get(
      `${api.localRoute}/api/v1/jobs?search=${searchTerm}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (err) {
    console.log("Error searching for jobs:", err.message);
    throw err;
  }
};
