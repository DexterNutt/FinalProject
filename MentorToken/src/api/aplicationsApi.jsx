import axios from "axios";
import { api } from "../config/properties";
import { getToken } from "../config/StorageFunctions";

export const fetchApplicationsFromApp = async () => {
  try {
    const token = getToken();

    const response = await axios.get(`${api.localRoute}/api/v1/applications`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (err) {
    console.log("Error fetching applications data:", err.message);
    throw err;
  }
};

export const submitApplicationToApp = async (applicationData) => {
  try {
    const token = getToken();

    const response = await axios.post(
      `${api.localRoute}/api/v1/applications`,
      applicationData,
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
    console.log("Error submitting application:", err.message);
    throw err;
  }
};
