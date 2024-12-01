import * as React from "react";
import Link from "next/link";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export const BreadCumb = () => {
  const breadcrumbs = [
    <Link href="/recipes" passHref key="1">
      <Typography fontWeight={600}>RECIPES</Typography>
    </Link>,
    <Link href="/recipes" passHref key="2">
      <Typography fontWeight={600}>BREAD</Typography>
    </Link>,
    <Typography key="3" color="text.primary" fontWeight={600}>
      QUICK BREAD
    </Typography>,
    <Typography key="4" color="text.primary"></Typography>,
  ];

  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={
          <NavigateNextIcon
            fontSize="small"
            sx={{
              color: "red",
            }}
          />
        }
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
};

export default BreadCumb;
