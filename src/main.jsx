import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
const theme = createTheme({
  palette: {
    primary: {
      dark: "#232347",
      main: "#001439",
      light: "#0E4B80",
    },
    info: {
      dark: "#1E66FF",
      main: "#1D65FF",
      light: "rgba(32, 98, 255, 0.4)",
    },
    secondary: {
      main: "#F0F0F0",
    },
    warning: {
      main:'#ed6c02',
      light: "#FF4516",
    },
  },
  typography: {
    fontFamily: ["Spectral"].join(),
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
