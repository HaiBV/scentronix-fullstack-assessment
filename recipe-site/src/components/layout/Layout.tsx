import React, { FC, ReactNode } from "react";

import { Container } from "@mui/material";

import Navigation from "@/components/navigation/Navigation";
import Footer from "../navigation/Footer";

const Layout: FC<{ children: ReactNode }> = ({ children }): JSX.Element => {
  return (
    <Container maxWidth="lg">
      <header>
        <Navigation />
      </header>
      <main>{children}</main>
    </Container>
  );
};

export default Layout;
