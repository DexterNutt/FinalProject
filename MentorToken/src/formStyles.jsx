export const inputFieldStyles = {
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
};

export const formButtonStyles = {
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
};
