"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Breadcrumbs as MuiBreadcrumbs } from "@mui/material";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

type BreadcrumbType = {
  breadcrumb: string;
  href: string;
};

export const Breadcrumbs = () => {
  const pathname = usePathname();
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbType[]>([]);

  useEffect(() => {
    if (pathname) {
      const linkPath = pathname.split("/");
      linkPath.shift();

      const pathArray = linkPath.map((path, i) => ({
        breadcrumb: path,
        href: `/${linkPath.slice(0, i + 1).join("/")}`,
      }));

      setBreadcrumbs([
        {
          breadcrumb: "Home",
          href: "/",
        },
        ...pathArray,
      ]);
    }
  }, [pathname]);
  if (!breadcrumbs || breadcrumbs.length < 1) return null;

  return (
    <Stack spacing={2}>
      <MuiBreadcrumbs
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
        {breadcrumbs.map((breadcrumb, i) => (
          <Link href={breadcrumb.href} passHref key={i}>
            <Typography fontWeight={600} textTransform={"capitalize"}>
              {breadcrumb.breadcrumb}
            </Typography>
          </Link>
        ))}
      </MuiBreadcrumbs>
    </Stack>
  );
};

export default Breadcrumbs;
