import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import styles from "./RegisterForm.module.css";
import { RegisterMentor } from "../registerMentor/RegisterMentor";
import { RegisterStartup } from "../registerStartup/RegisterStartup";
import { registerToApp } from "./duck/operations";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { formButtonStyles, inputFieldStyles } from "../../../../formStyles";

export const RegisterForm = () => {
  const [role, setRole] = useState("startup");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("Weak");
  const [passwordCriteria, setPasswordCriteria] = useState({
    length: false,
    digitOrSpecialChar: false,
    noPersonalInfo: false,
    passwordStrength: false,
  });
  const [step, setStep] = useState(1);
  const [mentorData, setMentorData] = useState({
    mentorName: "",
  });
  const [startupData, setStartupData] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleButtonClick = (role) => {
    setRole(role);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validatePassword(password, e.target.value);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword, email);
  };

  const validatePassword = (password, email) => {
    const criteria = {
      length: password.length >= 8,
      digitOrSpecialChar: /[0-9!@#$%^&*]/.test(password),
      noPersonalInfo:
        !password.includes(email) && !password.includes(email.split("@")[0]),
      passwordStrength: false,
    };

    const satisfiedCriteria = Object.values(criteria).filter(Boolean).length;

    let strength = "Weak";
    if (satisfiedCriteria >= 3) {
      strength = "Strong";
      criteria.passwordStrength = true;
    } else if (satisfiedCriteria >= 2) {
      strength = "Moderate";
    }

    setPasswordStrength(strength);
    setPasswordCriteria(criteria);
  };

  const getCriteriaClass = (isSatisfied) => {
    return isSatisfied ? styles.satisfied : "";
  };

  const handleContinue = () => {
    if (passwordStrength !== "Weak") {
      setStep(2);
    } else {
      alert("Password strength is too weak!");
    }
  };

  const handleMentorSubmit = (data) => {
    setMentorData(data);
    handleSubmit();
  };

  const handleStartupSubmit = (data) => {
    setStartupData(data);
    handleSubmit();
  };

  const handleSubmit = async () => {
    console.log("Submitted data:", {
      email,
      password,
      role,
      mentorName: mentorData.mentorName,
      startupName: startupData.startupName,
      representative: startupData.representative,
      address: startupData.address,
    });

    try {
      const response = await dispatch(
        registerToApp(
          email,
          password,
          role,
          mentorData.mentorName,
          startupData.startupName,
          startupData.representative,
          startupData.address
        )
      );
      if (response.status === "success") {
        navigate("/");
      } else {
        alert("Register failed. Please try again.");
      }
    } catch (error) {
      console.error("Register error:", error);
      alert("Register failed. Please try again.");
    }
  };

  return (
    <Box className={styles.registerContainer}>
      <Box className={styles.registerRight}>
        {step === 1 && (
          <Box className={styles.rightContainer}>
            <Box className={styles.registerRightTop}>
              <img src="/logo.svg" alt="logo" />
              <h2>CHOOSE ACCOUNT TYPE</h2>
            </Box>
            <Box className={styles.buttonContainer}>
              <Button
                className={`${styles.accountButton} ${
                  role === "startup" ? styles.selected : ""
                }`}
                onClick={() => handleButtonClick("startup")}
              >
                Startup
              </Button>
              <Button
                className={`${styles.accountButton} ${
                  role === "mentor" ? styles.selected : ""
                }`}
                onClick={() => handleButtonClick("mentor")}
              >
                Mentor
              </Button>
            </Box>
          </Box>
        )}

        {step === 1 && (
          <Box
            component="form"
            noValidate
            onSubmit={(e) => {
              e.preventDefault();
              handleContinue();
            }}
            className={styles.form}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={handleEmailChange}
              autoFocus
              sx={inputFieldStyles}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={handlePasswordChange}
              sx={inputFieldStyles}
            />
            <Box className={styles.passwordFeedback}>
              <ul>
                <li
                  className={getCriteriaClass(
                    passwordCriteria.passwordStrength
                  )}
                >
                  Password Strength: {passwordStrength}
                </li>
                <li
                  className={getCriteriaClass(passwordCriteria.noPersonalInfo)}
                >
                  Cannot contain your name or email address
                </li>
                <li className={getCriteriaClass(passwordCriteria.length)}>
                  At least 8 characters
                </li>
                <li
                  className={getCriteriaClass(
                    passwordCriteria.digitOrSpecialChar
                  )}
                >
                  Contains a number or symbol
                </li>
              </ul>
            </Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={styles.registerButton}
              sx={formButtonStyles}
            >
              Continue
            </Button>
          </Box>
        )}

        {step === 2 && role === "mentor" && (
          <RegisterMentor onNext={handleMentorSubmit} />
        )}

        {step === 2 && role === "startup" && (
          <RegisterStartup onNext={handleStartupSubmit} />
        )}

        {step === 1 && (
          <div className={styles.loginLinkContainer}>
            <div className={styles.loginLink}>
              <span>Already Have an account?</span>
              <a href="/login" className={styles.loginLinkText}>
                Login
              </a>
            </div>
          </div>
        )}
      </Box>
    </Box>
  );
};
