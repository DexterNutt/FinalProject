import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import styles from "./RegisterStartup.module.css";
import { formButtonStyles, inputFieldStyles } from "../../../../formStyles";

export const RegisterStartup = ({ onNext }) => {
  const [startupName, setStartupName] = useState("");
  const [startupRepresentative, setStartupRepresentative] = useState("");
  const [startupAddress, setStartupAddress] = useState("");
  const [inviteMentor, setInviteMentor] = useState("");

  const handleNameChange = (e) => {
    setStartupName(e.target.value);
  };
  const handleRepChange = (e) => {
    setStartupRepresentative(e.target.value);
  };
  const handleAddressChange = (e) => {
    setStartupAddress(e.target.value);
  };
  const handleInviteMentorChange = (e) => {
    setInviteMentor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onNext({
      startupName,
      startupRepresentative,
      startupAddress,
      inviteMentor,
    });
  };
  return (
    <Box className={styles.registerContainer}>
      <Box className={styles.registerRight}>
        <Box className={styles.rightContainer}>
          <Box className={styles.registerRightTop}>
            <img className={styles.logo} src="/logo.svg" alt="logo" />
            <h2>SETUP STARTUP ACCOUNT</h2>
          </Box>

          <div className={styles.imageContainer}>
            <img
              className={styles.briefcase}
              src="/startup-img.webp"
              alt="briefcase"
            />
            <img className={styles.camera} src="/photo-img.webp" alt="camera" />
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
              id="Startup Name"
              label="Startup Name"
              name="Startup Name"
              placeholder="My Startup Name"
              value={startupName}
              onChange={handleNameChange}
              autoFocus
              sx={inputFieldStyles}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="Legal Representative"
              label="Legal Representative"
              type="representative"
              id="legalRepresentative"
              placeholder="Name and Surname"
              value={startupRepresentative}
              onChange={handleRepChange}
              sx={inputFieldStyles}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="address"
              label="Registered Business Address"
              placeholder="Registered Business Address"
              type="address"
              id="startupAddress"
              value={startupAddress}
              onChange={handleAddressChange}
              sx={inputFieldStyles}
            />

            <TextField
              margin="normal"
              fullWidth
              name="inviteMentor"
              label="Invite Mentors via email"
              placeholder="Enter email address to invite mentor"
              type="inviteMentor"
              id="inviteMentor"
              value={inviteMentor}
              onChange={handleInviteMentorChange}
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
      </Box>
    </Box>
  );
};
