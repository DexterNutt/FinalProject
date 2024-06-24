import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import styles from "./RegisterMentor.module.css";

export const RegisterMentor = ({ onNext }) => {
  const [mentorName, setMentorName] = useState("");
  // const [skills, setSkills] = useState("");

  const handleNameChange = (e) => {
    setMentorName(e.target.value);
  };
  // const handleSkillsChange = (e) => {
  //   setSkills(e.target.value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext({ mentorName });
  };
  return (
    <Box className={styles.registerContainer}>
      <Box className={styles.registerRight}>
        <Box className={styles.rightContainer}>
          <Box className={styles.registerRightTop}>
            <img className={styles.logo} src="/logo.svg" alt="logo" />
            <h2>SETUP MENTOR ACCOUNT</h2>
          </Box>

          <div className={styles.photoContainer}>
            <div className={styles.mentorPhoto}>
              <img src="/user.png" alt="" />
            </div>
            <div className={styles.camera}>
              <img src="/photo-img.webp" alt="" />
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
              id="Mentor Name"
              label="Mentor Name"
              name="Mentor Name"
              placeholder="Name and surname"
              value={mentorName}
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

            {/* <TextField
              margin="normal"
              required
              fullWidth
              name="skills"
              label="Skills"
              type="skills"
              id="skills"
              placeholder="Your Skills"
              value={skills}
              onChange={handleSkillsChange}
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
            /> */}

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
                  By signing up to create an account I accept Company
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
