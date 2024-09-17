import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import styles from "./RegisterStartup.module.css";
import { formButtonStyles, inputFieldStyles } from "../../../styles/formStyles";

export const RegisterStartup = ({ onNext }) => {
  const [startupData, setStartupData] = useState({
    startupName: "",
    representative: "",
    address: "",
    inviteMentor: "",
  });
  const [photo, setPhoto] = useState("/work.png");
  const [isDefaultPhoto, setIsDefaultPhoto] = useState(true);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [errors, setErrors] = useState({});

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPhoto(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setIsDefaultPhoto(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDataChange = (e) => {
    const { name, value } = e.target;
    setStartupData((data) => ({
      ...data,
      [name]: value,
    }));
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log("Submitting:", startupData);
    const submissionData = {
      ...startupData,
      photo,
    };

    onNext(submissionData);
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
              accept="image/*"
              style={{ display: "none" }}
              onChange={handlePhotoUpload}
            />
          </div>
        </div>
      </div>

      {/* <div className={styles.photoContainer}>
        <div className={styles.workPhoto}>
          <img src="/work.png" alt="work photo" />
          <div className={styles.camera}>
            <img src="/photo-img.webp" alt="camera" />
          </div>
        </div>
      </div> */}

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
          id="legalRepresentative"
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
              By signing up to create an account I accept Company’s{" "}
              <a href="#" className={styles.loginLinkText}>
                Terms of use & Privacy Policy.
              </a>
            </span>
          </div>
        </div>
      </Box>
    </Box>
  );
};
