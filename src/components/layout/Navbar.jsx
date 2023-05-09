//file name: Navbar.jsx
//description: navbar JSX file
//author: supernova
//date: 05/08/2023

import React, { useState } from "react";
import { AppBar, Button, Toolbar, IconButton, Box } from "@mui/material";
import {
  Menu,
  Facebook,
  Twitter,
  Instagram,
  YouTube,
  WhatsApp,
} from "@mui/icons-material";
import Sidebar from "./Sidebar";

const navItems = [
  "Race to Costa Del Sol",
  "Solheim cup",
  "LPGA",
  "Let Access Series",
];

const navIcon = [
  <Facebook />,
  <Twitter />,
  <Instagram />,
  <YouTube />,
  <WhatsApp />,
];

function Navbar() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  // TODO
  // Why cannot I use useRef to call child's function from parement component

  return (
    <Box sx={{ display: "flex", marginBottom: "70px" }}>
      <AppBar component="nav">
        <Toolbar sx={{ justifyContent: "space-around" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <Menu />
          </IconButton>
          <img
            src="assets/img/logo.png"
            alt="logo"
            width="250px"
            height="60px"
          />
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                {item}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navIcon.map((item, index) => (
              <Button key={index} sx={{ color: "#fff" }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Sidebar toggle={toggle} />
    </Box>
  );
}

export default Navbar;
