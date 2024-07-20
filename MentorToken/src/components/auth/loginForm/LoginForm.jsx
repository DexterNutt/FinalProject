import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import styles from "./LoginForm.module.css";
import { logInToApp } from "./duck/operations";
import { useNavigate, Link } from "react-router-dom";
import { formButtonStyles, inputFieldStyles } from "../../styles/formStyles";

export const LoginForm = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await dispatch(
        logInToApp(loginData.email, loginData.password)
      );
      if (response.status === "success") {
        navigate("/mentor/dashboard");
      } else {
        alert("Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed. Please try again.");
    }
  };

  return (
    <Box className={styles.LoginForm} sx={{ height: "100vh" }}>
      <Box className={styles.LoginFormContainer}>
        <img src="/logo.svg" alt="Logo" />
        <div className={styles.text}>
          <h3 className={styles.heading}>Log in to Mentor Token</h3>
          <span>Enter your email and password to login</span>
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
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={loginData.username}
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
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
            value={loginData.password}
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
            sx={inputFieldStyles}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={styles.button}
            sx={formButtonStyles}
          >
            Log in
          </Button>
        </Box>
        <div className={styles.registerLinkContainer}>
          <div className={styles.registerLink}>
            <span> Don't have an account?</span>
            <a href="/register" className={styles.registerLinkText}>
              Register
            </a>
          </div>
        </div>
      </Box>
    </Box>
  );
};
