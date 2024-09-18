import axios from "axios";
import { api } from "../config/properties";
import { getToken } from "../config/StorageFunctions";

export const fetchUser = async () => {
  try {
    const token = getToken();

    // REMEMBER: AXIOS USES 2 PARAMS FOR GET THE URL AND CONFIG I.E. THE HEADERS IN THIS CASE
    const response = await axios.get(
      `${api.localRoute}/api/v1/dashboard/mentor`,
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
    console.log("Error fetching user data:", err.message);
    throw err;
  }
};
