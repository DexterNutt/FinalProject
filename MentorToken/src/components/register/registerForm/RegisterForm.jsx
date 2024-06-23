import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import styles from "./RegisterForm.module.css";

export const RegisterForm = () => {
  const [selectedAccountType, setSelectedAccountType] = useState("startup");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("Weak");
  const [passwordCriteria, setPasswordCriteria] = useState({
    length: false,
    digitOrSpecialChar: false,
    noPersonalInfo: false,
    passwordStrength: false,
  });

  const handleButtonClick = (accountType) => {
    setSelectedAccountType(accountType);
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

  return (
    <Box className={styles.registerContainer}>
      <Box className={styles.registerRight}>
        <Box className={styles.rightContainer}>
          <Box className={styles.registerRightTop}>
            <img src="/logo.svg" alt="logo" />
            <h2>CHOOSE ACCOUNT TYPE</h2>
          </Box>
          <Box className={styles.buttonContainer}>
            <Button
              className={`${styles.accountButton} ${
                selectedAccountType === "startup" ? styles.selected : ""
              }`}
              onClick={() => handleButtonClick("startup")}
            >
              Startup
            </Button>
            <Button
              className={`${styles.accountButton} ${
                selectedAccountType === "mentor" ? styles.selected : ""
              }`}
              onClick={() => handleButtonClick("mentor")}
            >
              Mentor
            </Button>
          </Box>
          <Box
            component="form"
            noValidate
            onSubmit={(e) => {
              e.preventDefault();
              // handle form submission
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
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={handlePasswordChange}
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
                marginTop: "5rem",
                zIndex: 1,
                "&:hover": {
                  backgroundColor: "#575ed8",
                },
                textTransform: "none",
              }}
            >
              Continue
            </Button>
          </Box>
          <div className={styles.loginLinkContainer}>
            <div className={styles.loginLink}>
              <span>Already Have an account?</span>
              <a href="/login" className={styles.loginLinkText}>
                Login
              </a>
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  );
};
