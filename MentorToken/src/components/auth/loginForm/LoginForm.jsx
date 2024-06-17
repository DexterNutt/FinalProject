import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import styles from "./LoginForm.module.css";

export const LoginForm = () => {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const dispatch = useDispatch();
  async function logIn() {
    try {
      dispatch(logInToApp(loginData.username, loginData.password));
    } catch (error) {
      alert(error);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
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
            value={loginData.username}
            onChange={(e) => {
              setLoginData({ ...loginData, username: e.target.value });
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
            value={loginData.password}
            onChange={(e) => {
              setLoginData({ ...loginData, password: e.target.value });
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={styles.button}
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
            onClick={logIn}
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
