import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { configureStore } from "@reduxjs/toolkit";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import rootReducer from "./reducers/rootReducer.js";
import { Provider } from "react-redux";
const theme = createTheme({
  breakpoints: {
    keys: ["xs", "sm", "tablet", "md", "lg", "xl"],
    values: {
      xs: 0,
      sm: 600,
      tablet: 640,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      dark: "#232347",
      main: "#001439",
      light: "#0E4B80",
      contrastText: "#041318",
    },
    info: {
      dark: "#1E66FF",
      main: "#1D65FF",
      light: "rgba(32, 98, 255, 0.4)",
      contrastText: "#F4FCFF",
    },
    secondary: {
      main: "#F0F0F0",
      light: "#F4F4F4",
      dark: "#262626",
      contrastText: "#3E4348",
    },
    warning: {
      main: "#ed6c02",
      light: "#FF4516",
    },
    darkGreen: {
      main: "#223E3F",
      light: "#475E68",
    },
    muted: {
      main: "#6C6C6C",
      dark: "#585858",
      light: "#8D8D8D",
      contrastText: "#5F5F5F",
    },
    mateBlack: {
      main: "#3B3849",
      dark: "#000002",
      light: "#171717",
      contrastText: "#2B2B2B",
    },
  },
  typography: {
    fontFamily: ["Poppins", "Spectral", "Roboto", "Inter"].join(),
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});
const store = configureStore(
  {
    reducer: rootReducer,
  },
  devToolsEnhancer()
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ThemeProvider>
);
