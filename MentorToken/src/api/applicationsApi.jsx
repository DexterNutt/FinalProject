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

    return response.data.data;
  } catch (err) {
    console.log("Error fetching applications data:", err.message);
    throw err;
  }
};

export const fetchApplicationsToJobFromApp = async (jobId) => {
  const token = getToken();

  try {
    const response = await axios.get(
      `${api.localRoute}/api/v1/applications/${jobId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    console.log(response);

    return response.data;
  } catch (err) {
    console.error("Error fetching applications", err.message);
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

export const acceptJobOfferInApp = async (applicationId) => {
  try {
    const response = await axios.patch(
      `${api.localRoute}/api/v1/applications/accept/${applicationId}`
    );
    return response.data;
  } catch (err) {
    console.error("Error accepting application", err);
    throw err;
  }
};

export const rejectJobOfferInApp = async (applicationId) => {
  try {
    const response = await axios.patch(
      `${api.localRoute}/api/v1/applications/reject/${applicationId}`
    );
    return response.data;
  } catch (err) {
    console.error("Error rejecting application", err);
    throw err;
  }
};

export const fetchApplicationsByMentorFromApp = async (mentorId) => {
  const token = getToken();

  try {
    const response = await axios.get(
      `${api.localRoute}/api/v1/applications/mentor/${mentorId}`,
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
    console.error("Error fetching applications for mentor", err.message);
    throw err;
  }
};
