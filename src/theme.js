import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#C200FF",
    },
    secondary: {
      main: "#00E5FF",
    },
    tertiary: {
      main: "#FF9800", // Vivid orange
    }
  },
  typography: {
    fontFamily: "Comic Neue, Poppins, Roboto, sans-serif",
  }
});

export default theme;