import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#A9A9C6', // Replace with your desired primary color
    },
    secondary: {
      main: '#2B303B', // Replace with your desired secondary color
    },
    background: {
      default: '#2B303B', // Replace with your desired background color
    },
    text: {
      primary: '#ffffff', // Replace with your desired text color
    },
  },
  typography: {
    fontFamily: "Monaco, monospace",
    fontSize: 16, // Base font size
    // Replace with your desired font family
    h1: {
      fontSize: '5rem',
      fontWeight: 700,
      textAlign: 'center', // Center align h1 text
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
      textAlign: 'center', // Center align h2 text
    },
  },
});

theme = responsiveFontSizes(theme);
export default theme;
