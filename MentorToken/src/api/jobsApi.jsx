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
  } catch (error) {
    console.log("Error searching for jobs:", error.message);
    throw error;
  }
};

export const offerJobToMentor = async (
  startupId,
  mentorId,
  title,
  description,
  applicationType
) => {
  try {
    const token = getToken();

    const response = await axios.post(
      `${api.localRoute}/api/v1/jobs/offer`,
      {
        startupId: startupId,
        mentorId: mentorId,
        title: title,
        description: description,
        applicationType: applicationType,
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
  } catch (error) {
    console.log("Error offering job:", error.message);
    throw error;
  }
};

export const fetchJobsByStartupFromApp = async (startupId) => {
  try {
    const token = getToken();

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

export const fetchJobById = async (jobId) => {
  try {
    const token = getToken();

    const response = await axios.get(`${api.localRoute}/api/v1/jobs/${jobId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    return response.data.data.job;
  } catch (err) {
    console.log("Error fetching job by ID:", err.message);
    throw err;
  }
};
