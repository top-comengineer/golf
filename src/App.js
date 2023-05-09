//file name: App.js
//description: Header file of react project
//author: supernova
//date: 05/08/2023

import React from "react";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import News from "./pages/News";
import NotPage from "./pages/404Page";

import getTheme from "./config/themeConfig";
import ThemeContext from "./context/ThemeContext";
import "./App.css";

function App() {
  /*
  TODO
  We should set some themes for this appliation - light, dark, red, etc

  const curThemeName = localStorage.getItem("appTheme") || "light"; //load theme name from localstorage
  const [themeType, setThemeType] = React.useState(curThemeName); //set theme

  const setThemeName = (themeName) => {
    localStorage.setItem("appTheme", themeName);
    setThemeType(themeName);
  };

  */

  return (
    <ThemeContext.Provider value={""}>
      <ThemeProvider theme={getTheme}>
        <div className="App">
          <Navbar />
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="news" element={<News />} />
              <Route path="*" element={<NotPage />} />
            </Routes>
          </BrowserRouter>
          <Footer />
        </div>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
