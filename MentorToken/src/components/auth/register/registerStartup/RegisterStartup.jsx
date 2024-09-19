import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Box,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import styles from "./RegisterStartup.module.css";
import { formButtonStyles, inputFieldStyles } from "../../../styles/formStyles";
import { updateStartupData } from "../registerForm/registerSlice";
import { uploadImage } from "../../../../api/imagesApi";

export const RegisterStartup = ({ onNext }) => {
  const dispatch = useDispatch();
  const [startupData, setStartupData] = useState({
    startupName: "",
    representative: "",
    address: "",
    inviteMentor: "",
  });
  const [photo, setPhoto] = useState("/work.png");
  const [photoToUpload, setPhotoToUpload] = useState("");
  const [isDefaultPhoto, setIsDefaultPhoto] = useState(true);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const formData = new FormData();
    formData.append("photo", photoToUpload);

    let imageUrl = "/work.png";

    if (photoToUpload) {
      try {
        const response = await uploadImage(photoToUpload);
        imageUrl = response.filePath;
      } catch (err) {
        console.error("Error uploading image:", err);
        return;
      }
    }

    dispatch(updateStartupData({ ...startupData, imageUrl }));
    onNext({ ...startupData, photo: imageUrl });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!startupData.startupName)
      newErrors.startupName = "Startup name is required";
    if (!startupData.representative)
      newErrors.representative = "Representative is required";
    if (!startupData.address) newErrors.address = "Address is required";
    if (!agreeToTerms) newErrors.terms = "You must accept the terms";
    return newErrors;
  };

  const handleDataChange = (e) => {
    const { name, value } = e.target;
    setStartupData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPhotoToUpload(file);
      setIsDefaultPhoto(false);

      const reader = new FileReader();
      reader.onload = (e) => {
        setPhoto(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box className={styles.registerRight}>
      <Box className={styles.registerRightTop}>
        <img className={styles.logo} src="/logo.svg" alt="logo" />
        <h2>SETUP STARTUP ACCOUNT</h2>
      </Box>

      <div className={styles.photoContainer}>
        <div className={styles.mentorPhoto}>
          <img
            src={photo}
            alt="work icon"
            style={{
              objectFit: isDefaultPhoto ? "contain" : "cover",
              width: isDefaultPhoto ? "40%" : "100%",
              height: isDefaultPhoto ? "40%" : "100%",
            }}
          />
          <div className={styles.camera}>
            <label htmlFor="photoUpload">
              <img src="/photo-img.webp" alt="camera" />
            </label>
            <input
              type="file"
              id="photoUpload"
              name="photo"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handlePhotoUpload}
            />
          </div>
        </div>
      </div>

      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit}
        className={styles.form}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="startupName"
          label="Startup Name"
          name="startupName"
          placeholder="My Startup Name"
          value={startupData.startupName}
          onChange={handleDataChange}
          autoFocus
          sx={inputFieldStyles}
        />

        <TextField
          margin="normal"
          required
          fullWidth
          name="representative"
          label="Legal Representative"
          id="representative"
          placeholder="Name and Surname"
          value={startupData.representative}
          onChange={handleDataChange}
          sx={inputFieldStyles}
        />

        <TextField
          margin="normal"
          required
          fullWidth
          name="address"
          label="Registered Business Address"
          id="address"
          placeholder="Registered Business Address"
          value={startupData.address}
          onChange={handleDataChange}
          sx={inputFieldStyles}
        />

        <TextField
          margin="normal"
          fullWidth
          name="inviteMentor"
          label="Invite Mentors via email"
          id="inviteMentor"
          placeholder="Enter email address to invite mentor"
          value={startupData.inviteMentor}
          onChange={handleDataChange}
          sx={inputFieldStyles}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          className={styles.registerButton}
          sx={formButtonStyles}
        >
          Register
        </Button>
        <div className={styles.termsAndConditions}>
          <div className={styles.text}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={agreeToTerms}
                  onChange={(e) => setAgreeToTerms(e.target.checked)}
                  className={styles.checkbox}
                  sx={{
                    color: "#696cff",
                    "&.Mui-checked": {
                      color: "#696cff",
                    },
                  }}
                />
              }
            />
            <span>
              By signing up to create an account I accept Company
              <a href="#" className={styles.loginLinkText}>
                Terms of use & Privacy Policy.
              </a>
            </span>
          </div>
          {errors.terms && (
            <div style={{ color: "red", marginTop: "8px" }}>{errors.terms}</div>
          )}
        </div>
      </Box>
    </Box>
  );
};
