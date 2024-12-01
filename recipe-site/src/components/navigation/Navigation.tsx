import React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";

import Logo from "@/components/shared/Logo";
import PrimaryNavItems from "@/components/navigation/PrimaryNavItems";
import SecondaryNavItems from "@/components/navigation/SecondaryNavItems";

const Navigation = () => {
  return (
    <AppBar
      position="static"
      sx={{
        background: "linear-gradient(to bottom, white 55%, #FEFEDF 0%)",
        py: 1,
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          maxWidth: "1200px",
          width: "100%",
          mx: "auto",
        }}
      >
        <Logo />
        <Box>
          <PrimaryNavItems />
          <SecondaryNavItems />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
