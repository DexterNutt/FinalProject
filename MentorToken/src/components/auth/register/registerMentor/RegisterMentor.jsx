import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Box,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import styles from "./RegisterMentor.module.css";
import { formButtonStyles, inputFieldStyles } from "../../../styles/formStyles";
import { updateMentorData } from "../registerForm/registerSlice";
import { uploadImage } from "../../../../api/imagesApi";

export const RegisterMentor = ({ onNext }) => {
  const dispatch = useDispatch();
  const [mentorName, setMentorName] = useState("");
  const [photo, setPhoto] = useState("/user.png");
  const [photoToUpload, setPhotoToUpload] = useState("");
  const [isDefaultPhoto, setIsDefaultPhoto] = useState(true);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = {};
    if (!mentorName.trim()) {
      validationErrors.mentorName = "Mentor name is required";
    }
    if (!agreeToTerms) {
      validationErrors.terms = "You must agree to the terms";
    }
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const formData = new FormData();

    formData.append("photo", photoToUpload);

    let imageUrl = "/user.png";

    if (photoToUpload) {
      try {
        const response = await uploadImage(photoToUpload);
        imageUrl = response.filePath;
      } catch (err) {
        console.error("Error uploading image:", err);
        return;
      }

      dispatch(updateMentorData({ mentorName, imageUrl }));
      onNext({ mentorName, photo: imageUrl });
    }
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
          id="mentorName"
          label="Mentor Name"
          name="mentorName"
          placeholder="Name and Surname"
          value={mentorName}
          onChange={(e) => setMentorName(e.target.value)}
          autoFocus
          error={!!errors.mentorName}
          helperText={errors.mentorName}
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
                  checked={agreeToTerms}
                  onChange={(e) => setAgreeToTerms(e.target.checked)} // Handle checkbox change
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
