import axios from "axios";
import { api } from "../config/properties";

export const uploadImage = async (imageFile) => {
  const formData = new FormData();
  formData.append("photo", imageFile);

  const header = {
    "Content-Type": "multipart/form-data",
  };

  try {
    const response = await axios.post(
      `${api.localRoute}/api/v1/auth/upload`,
      formData,
      {
        headers: header,
      }
    );
    return response.data;
  } catch (err) {
    console.error("Error uploading image:", err.message);
    throw err;
  }
};
