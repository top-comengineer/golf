//file name: Footer.jsx
//description: footer component
//author: supernova
//date: 05/08/2023

import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  YouTube,
  WhatsApp,
} from "@mui/icons-material";

const Footer = () => {
  const footerIcons = [
    <Facebook />,
    <Twitter />,
    <Instagram />,
    <YouTube />,
    <WhatsApp />,
  ];

  const footerItems = [
    "Parnters & Suppliers",
    "Rankings",
    "Photos",
    "News",
    "Players",
  ];

  return (
    <Box
      className="fixed bottom-0 flex justify-center w-full p-12"
      sx={{ backgroundColor: "secondary.main" }}
    >
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box>
              {footerItems.map((item) => (
                <Button key={item} sx={{ color: "#fff" }}>
                  {item}
                </Button>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              {footerIcons.map((item, index) => (
                <Button key={index} sx={{ color: "#fff" }}>
                  {item}
                </Button>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
