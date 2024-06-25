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

  const handleDataChange = (e) => {
    const { name, value } = e.target;
    setStartupData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting:");
    onNext(startupData);
  };

  return (
    <Box className={styles.registerRight}>
      <Box className={styles.registerRightTop}>
        <img className={styles.logo} src="/logo.svg" alt="logo" />
        <h2>SETUP STARTUP ACCOUNT</h2>
      </Box>

      <div className={styles.photoContainer}>
        <div className={styles.workPhoto}>
          <img src="/work.png" alt="work photo" />
          <div className={styles.camera}>
            <img src="/photo-img.webp" alt="camera" />
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
