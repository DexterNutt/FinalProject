import axios from "axios";
import { api } from "../config/properties";
import { getToken } from "../config/StorageFunctions";

export const fetchUser = async (userId) => {
  try {
    const token = getToken();

    const response = await axios.get(
      `${api.localRoute}/api/v1/dashboard/mentor/${userId}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (err) {
    console.log("Error fetching user data:", err);
    throw err;
  }
};
