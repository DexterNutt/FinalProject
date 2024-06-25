import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import styles from "./RegisterMentor.module.css";
import { formButtonStyles, inputFieldStyles } from "../../../styles/formStyles";

// const [skills, setSkills] = useState("");

// const handleNameChange = (e) => {
//   setMentorName(e.target.value);
// };

// const handleSkillsChange = (e) => {
//   setSkills(e.target.value);
// };

export const RegisterMentor = ({ onNext }) => {
  const [mentorName, setMentorName] = useState("");
  const [photo, setPhoto] = useState("/user.png");
  const [isDefaultPhoto, setIsDefaultPhoto] = useState(true);

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPhoto(e.target.result);
        setIsDefaultPhoto(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting:", mentorName);
    console.log("Submitting:", photo);
    onNext({ mentorName, photo });
  };

  return (
    <Box className={styles.registerRight}>
      <Box className={styles.registerRightTop}>
        <img className={styles.logo} src="/logo.svg" alt="logo" />
        <h2>SETUP MENTOR ACCOUNT</h2>
      </Box>
      <div className={styles.photoContainer}>
        <div className={styles.mentorPhoto}>
          <img
            src={photo}
            alt="user icon"
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
          onChange={(e) => {
            console.log("Input Change:", e.target.value);
            setMentorName(e.target.value);
          }}
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
