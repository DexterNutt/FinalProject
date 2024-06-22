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
    uppercase: false,
    lowercase: false,
    digit: false,
    specialChar: false,
    noPersonalInfo: false,
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
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      digit: /[0-9]/.test(password),
      specialChar: /[!@#$%^&*]/.test(password),
      noPersonalInfo:
        !password.includes(email) && !password.includes(email.split("@")[0]),
    };

    setPasswordCriteria(criteria);

    const satisfiedCriteria = Object.values(criteria).filter(Boolean).length;

    let strength = "Weak";
    if (satisfiedCriteria >= 5) {
      strength = "Strong";
    } else if (satisfiedCriteria >= 3) {
      strength = "Moderate";
    }

    setPasswordStrength(strength);
  };

  const getCriteriaClass = (isSatisfied) => {
    return isSatisfied ? styles.satisfied : "";
  };

  const getPasswordStrengthClass = () => {
    if (passwordStrength === "Strong") return styles.strong;
    if (passwordStrength === "Moderate") return styles.moderate;
    return styles.weak;
  };

  return (
    <Box className={styles.registerContainer}>
      <Box className={styles.registerRight}>
        <Box className={styles.rightContainer}>
          <Box className={styles.registerRightTop}>
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
              <p
                className={`${
                  styles.passwordStrength
                } ${getPasswordStrengthClass()}`}
              >
                Password Strength: {passwordStrength}
              </p>
              <ul>
                <li className={getCriteriaClass(passwordCriteria.length)}>
                  At least 8 characters
                </li>
                <li className={getCriteriaClass(passwordCriteria.uppercase)}>
                  At least one uppercase letter (A-Z)
                </li>
                <li className={getCriteriaClass(passwordCriteria.lowercase)}>
                  At least one lowercase letter (a-z)
                </li>
                <li className={getCriteriaClass(passwordCriteria.digit)}>
                  At least one digit (0-9)
                </li>
                <li className={getCriteriaClass(passwordCriteria.specialChar)}>
                  At least one special character (e.g., !, @, #, $, %, ^, &)
                </li>
                <li
                  className={getCriteriaClass(passwordCriteria.noPersonalInfo)}
                >
                  Cannot contain your name or email address
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
