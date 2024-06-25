import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import styles from "./RegisterMentor.module.css";
import { formButtonStyles, inputFieldStyles } from "../../../../formStyles";

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
    <Box className={styles.registerRight}>
      <Box className={styles.registerRightTop}>
        <img className={styles.logo} src="/logo.svg" alt="logo" />
        <h2>SETUP MENTOR ACCOUNT</h2>
      </Box>

      <div className={styles.photoContainer}>
        <div className={styles.mentorPhoto}>
          <img src="/user.png" alt="user icon" />
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
          id="Mentor Name"
          label="Mentor Name"
          name="Mentor Name"
          placeholder="Name and surname"
          value={mentorName}
          onChange={handleNameChange}
          autoFocus
          sx={inputFieldStyles}
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
              sx={inputFieldStyles}
            /> */}

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
              By signing up to create an account I accept Company
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
