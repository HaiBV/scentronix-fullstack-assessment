import React from "react";
import { Typography, List, ListItem, ListItemText } from "@mui/material";
import Link from "next/link";

const PrimaryNavItems = () => {
  const primaryNavItems = [
    { label: "SHOP", href: "/shop" },
    { label: "RECIPES", href: "/recipes" },
    { label: "LEARN", href: "/learn" },
    { label: "ABOUT", href: "/about" },
    { label: "BLOG", href: "/blog" },
  ];
  return (
    <List
      sx={{
        display: "flex",
        gap: 2,
        py: 2,
        mb: 1,
        color: "text.secondary",
      }}
    >
      {primaryNavItems.map((item) => (
        <ListItem
          key={item.label}
          sx={{
            borderBottom: "2px solid transparent",
            "&:hover": {
              borderBottomColor: "red",
              cursor: "pointer",
            },
          }}
        >
          <ListItemText
            primary={
              <Link href={item.href}>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "bold",
                  }}
                >
                  {item.label}
                </Typography>
              </Link>
            }
          />
        </ListItem>
      ))}
    </List>
  );
};

export default PrimaryNavItems;
