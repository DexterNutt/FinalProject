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

    return response.data.data.jobs;
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

export const offerJobToMentor = async (
  companyId,
  mentorId,
  jobName,
  description
) => {
  try {
    const token = getToken();

    const response = await axios.post(
      `${api.localRoute}/api/v1/jobs/offer`,
      {
        companyId: companyId,
        mentorId: mentorId,
        title: jobName,
        description: description,
      },
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
    console.log("Error offering job:", err.message);
    throw err;
  }
};

export const fetchJobsByStartupFromApp = async (startupId) => {
  try {
    const token = getToken();
    console.log(startupId);
    const response = await axios.get(
      `${api.localRoute}/api/v1/jobs/company/${startupId}`,
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
    console.log("Error fetching jobs by startup:", err.message);
    throw err;
  }
};

export const createJobByStartup = async (jobData) => {
  try {
    const token = getToken();

    const response = await axios.post(
      `${api.localRoute}/api/v1/jobs`,
      {
        startupId: jobData.startupId,
        title: jobData.jobName,
        description: jobData.description,
        photo: jobData.photo,
      },
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
    console.log("Error creating job:", err.message);
    throw err;
  }
};
