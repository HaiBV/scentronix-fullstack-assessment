import React from "react";
import { Typography, List, ListItem, ListItemText } from "@mui/material";

const SecondaryNavItems = () => {
  return (
    <List
      sx={{
        display: "flex",
        justifyContent: "left",
        gap: 2,
        color: "text.secondary",
      }}
    >
      {["CATEGORIES", "COLLECTIONS", "RESOURCES"].map((item) => (
        <ListItem key={item}>
          <ListItemText
            primary={
              <Typography variant="body1" sx={{ fontWeight: "bold", fontSize: "0.85rem" }}>
                {item}
              </Typography>
            }
          />
        </ListItem>
      ))}
    </List>
  );
};

export default SecondaryNavItems;
