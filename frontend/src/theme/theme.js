import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      light: "#a6d4fa",
      main: "#90caf9", // Bright Blue
      dark: "#42a5f5",
      contrastText: "#000000",
    },
    secondary: {
      light: "#f6a5c0",
      main: "#f48fb1", // Soft Pink
      dark: "#ec407a",
      contrastText: "#000000",
    },
    error: {
      light: "#ff8a80",
      main: "#ff5252", // Vibrant Red
      dark: "#ff1744",
      contrastText: "#ffffff",
    },
    warning: {
      light: "#ffd740",
      main: "#ffc107", // Golden Yellow
      dark: "#ffa000",
      contrastText: "#000000",
    },
    info: {
      light: "#80d6ff",
      main: "#40c4ff", // Cyan
      dark: "#00b0ff",
      contrastText: "#000000",
    },
    success: {
      light: "#69f0ae",
      main: "#00e676", // Emerald Green
      dark: "#00c853",
      contrastText: "#000000",
    },
    background: {
      default: "#fafafa", // Light Gray
      paper: "#ffffff", // White
    },
    text: {
      primary: "#212121", // Dark Gray
      secondary: "#757575", // Medium Gray
      disabled: "#bdbdbd", // Light Gray
    },
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: {
      fontSize: "4.5rem",
      fontWeight: 700,
      lineHeight: 1.2,
      "@media (max-width:960px)": {
        fontSize: "3.5rem",
      },
      "@media (max-width:600px)": {
        fontSize: "2.5rem",
      },
    },
    h2: {
      fontSize: "3.75rem",
      fontWeight: 600,
      lineHeight: 1.3,
      "@media (max-width:960px)": {
        fontSize: "2.75rem",
      },
      "@media (max-width:600px)": {
        fontSize: "2rem",
      },
    },
    h3: {
      fontSize: "3rem",
      fontWeight: 600,
      lineHeight: 1.3,
      "@media (max-width:960px)": {
        fontSize: "2.25rem",
      },
      "@media (max-width:600px)": {
        fontSize: "1.75rem",
      },
    },
    h4: {
      fontSize: "2.125rem",
      fontWeight: 600,
      lineHeight: 1.4,
      "@media (max-width:960px)": {
        fontSize: "1.75rem",
      },
      "@media (max-width:600px)": {
        fontSize: "1.5rem",
      },
    },
    h5: {
      fontSize: "1.5rem",
      fontWeight: 600,
      lineHeight: 1.5,
      "@media (max-width:960px)": {
        fontSize: "1.25rem",
      },
      "@media (max-width:600px)": {
        fontSize: "1.1rem",
      },
    },
    h6: {
      fontSize: "1.25rem",
      fontWeight: 600,
      lineHeight: 1.6,
      "@media (max-width:960px)": {
        fontSize: "1.1rem",
      },
      "@media (max-width:600px)": {
        fontSize: "1rem",
      },
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
      "@media (max-width:600px)": {
        fontSize: "0.9rem",
      },
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.6,
      "@media (max-width:600px)": {
        fontSize: "0.8rem",
      },
    },
    button: {
      fontSize: "0.875rem",
      fontWeight: 600,
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    "none",
    "0px 2px 4px rgba(0, 0, 0, 0.1)",
    "0px 4px 8px rgba(0, 0, 0, 0.1)",
    "0px 6px 12px rgba(0, 0, 0, 0.1)",
    "0px 8px 16px rgba(0, 0, 0, 0.1)",
    "0px 10px 20px rgba(0, 0, 0, 0.1)",
    "0px 12px 24px rgba(0, 0, 0, 0.1)",
  ],
  transitions: {
    easing: {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
  },
  spacing: 8, // Base spacing unit (8px)
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "8px 16px",
          textTransform: "none",
          fontWeight: 600,
        },
        contained: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          transition: "box-shadow 0.3s ease",
          "&:hover": {
            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});

export default theme;