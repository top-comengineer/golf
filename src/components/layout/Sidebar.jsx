//file name: Sidebar.jsx
//description: sidebar when this app is working on mobile
//author: supernova
//date: 05/08/2023

import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
} from "@mui/material";

const Sidebar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  //use useEffect hook for calling child's function from parent when menu button is clicked.
  useEffect(() => {
    setMobileOpen((prevState) => !prevState);
  }, [props.toggle]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerWidth = 240;
  const navItems = [
    "Race to Costa Del Sol",
    "Solheim cup",
    "LPGA",
    "Let Access Series",
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Menu
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={handleDrawerToggle}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box component="nav">
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

Sidebar.propTypes = {
  window: PropTypes.func,
};

export default Sidebar;
