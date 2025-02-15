import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    typography: {
      fontFamily: ["San Francisco", "sans-serif"].join(","),
    },
    primary: {
      main: "#eeeeee", // Örneğin, ana renk
    },
    secondary: {
      main: "#e0e0e0", // Örneğin, ikincil renk
    },
    tertiary: {
      main: "#757575",
    },
    text: {
      main: "#424242", // Örneğin, metin rengi
    },
    modal: {
      main: "#eeeeee",
    },
  },
  // Diğer tema özellikleri buraya eklenebilir
});

export default theme;
