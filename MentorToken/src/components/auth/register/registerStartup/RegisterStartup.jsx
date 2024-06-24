import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import styles from "./RegisterStartup.module.css";

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
              sx={{
                width: "100%",
                "& .MuiInputLabel-root": {
                  fontSize: "12px",
                  textAlign: "center",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#d3d3ff",
                    borderRadius: "9px",
                  },
                  "&:hover fieldset": {
                    borderColor: "#696cff",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#696cff",
                  },
                  "& input": {
                    color: "#aab4bf",
                    fontSize: "17px",
                    fontWeight: 500,
                    padding: "12px",
                  },
                  "&.Mui-focused input": {
                    color: "#566a7f",
                    fontWeight: 400,
                  },
                },
              }}
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
              sx={{
                width: "100%",
                "& .MuiInputLabel-root": {
                  fontSize: "12px",
                  textAlign: "center",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#d3d3ff",
                    borderRadius: "9px",
                  },
                  "&:hover fieldset": {
                    borderColor: "#696cff",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#696cff",
                  },
                  "& input": {
                    color: "#aab4bf",
                    fontSize: "17px",
                    fontWeight: 500,
                    padding: "12px",
                  },
                  "&.Mui-focused input": {
                    color: "#566a7f",
                    fontWeight: 400,
                  },
                },
              }}
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
              sx={{
                width: "100%",
                "& .MuiInputLabel-root": {
                  fontSize: "12px",
                  textAlign: "center",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#d3d3ff",
                    borderRadius: "9px",
                  },
                  "&:hover fieldset": {
                    borderColor: "#696cff",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#696cff",
                  },
                  "& input": {
                    color: "#aab4bf",
                    fontSize: "17px",
                    fontWeight: 500,
                    padding: "12px",
                  },
                  "&.Mui-focused input": {
                    color: "#566a7f",
                    fontWeight: 400,
                  },
                },
              }}
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
              sx={{
                width: "100%",
                "& .MuiInputLabel-root": {
                  fontSize: "12px",
                  textAlign: "center",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#d3d3ff",
                    borderRadius: "9px",
                  },
                  "&:hover fieldset": {
                    borderColor: "#696cff",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#696cff",
                  },
                  "& input": {
                    color: "#aab4bf",
                    fontSize: "17px",
                    fontWeight: 500,
                    padding: "12px",
                  },
                  "&.Mui-focused input": {
                    color: "#566a7f",
                    fontWeight: 400,
                  },
                },
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={styles.registerButton}
              sx={{
                padding: "16px 24px",
                borderRadius: "9px",
                backgroundColor: "#696cff",
                color: "#fff",
                fontFamily: '"Manrope", sans-serif',
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                width: "100%",
                height: "51px",
                gap: "16px",
                position: "relative",
                overflow: "hidden",
                transition: "background-color 0.3s ease",
                fontSize: "20px",
                fontWeight: 700,
                lineHeight: "51px",
                textAlign: "center",
                justifyContent: "center",
                marginTop: "2rem",
                zIndex: 1,
                "&:hover": {
                  backgroundColor: "#575ed8",
                },
                textTransform: "none",
              }}
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
