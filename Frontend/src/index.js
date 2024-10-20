import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme, alpha } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));

export const theme = createTheme({
  spacing: (factor) => `${0.4 * factor}rem`,
  palette: {
    primary: {
      main: "#0DBDF2",
      light: "#39C9F9",
      dark: "#073B53",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#FF4081",
      light: "#FF79B0",
      dark: "#C60055",
      contrastText: "#FFFFFF",
    },
    background: {
      main: "#071116",
      default: "#0A1B25",
      paper: "#1C2833",
      primary: "#020B10",
      light: "#05141C",
      lightest: "#3B4951",
      highlight: "#6C767C",
      button: alpha("#071116", 0.6),
    },
    text: {
      primary: "#39C9F9",
      secondary: "#AAB8C2",
      disabled: "#6C767C",
      hint: "#AAB8C2",
    },
    action: {
      active: "#39C9F9",
      hover: alpha("#39C9F9", 0.08),
      selected: alpha("#39C9F9", 0.16),
      disabled: "#6C767C",
      disabledBackground: "#1C2833",
    },
    divider: "#1C2833",
  },
  typography: {
    fontFamily: "'Nunito Sans', sans-serif",
    htmlFontSize: 10,
    allVariants: { 
      color: "#FFFFFF",
    },
    h1: {
      fontSize: "4rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "3.2rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "2.6rem",
      fontWeight: 500,
    },
    h4: {
      fontSize: "2.4rem",
      fontWeight: 700,
    },
    h5: {
      fontSize: "2.2rem",
      fontWeight: 500,
    },
    h6: {
      fontSize: "2rem",
      fontWeight: 400,
    },
    body1: {
      fontSize: "1.8rem",
    },
    body2: {
      fontSize: "1.6rem",
    },
    caption: {
      fontSize: "1.4rem",
      color: "#AAB8C2",
    },
    button: {
      fontSize: "1.2rem",
      fontWeight: 500,
      textTransform: "none",
      color: "#FFFFFF",
      "&:hover": {
        color: alpha("#FFFFFF", 0.8),
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,  
        },
      },
    },
  },
});


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
