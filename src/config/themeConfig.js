//file name: themeConfig.js
//description: config file for setting theme of this system.
//author: supernova
//date: 05/08/2023

import { createTheme } from "@mui/material/styles";

const getTheme = createTheme({
  palette: {
    primary: {
      main: "#2a947d",
    },
    secondary: {
      main: "#494c7d",
    },
  },
});

export default getTheme;
