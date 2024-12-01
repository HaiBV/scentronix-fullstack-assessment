import React from "react";

import Image from "next/image";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import GroupWorkRoundedIcon from "@mui/icons-material/GroupWorkRounded";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import Link from "@mui/material/Link";

import Breadcrumbs from "@/components/shared/Breadcrumbs";
const RecipeDetails = ({ recipeId }: { recipeId: string }) => {
  return (
    <Box component="main" sx={{ display: "flex", gap: 5, maxWidth: "1200px", mx: "auto", mt: 5 }}>
      <Box sx={{ flex: 1 }}>
        <Box component="header">
          <Box>
            <Breadcrumbs />
          </Box>
          <Typography variant="h2" sx={{ mt: 2, fontWeight: "bold" }}>
            Whole-grain Banana Bread {recipeId}
          </Typography>
        </Box>
        <Box>
          <Typography variant="body1" sx={{ mt: 4 }}>
            This one-bowl banana bread — our{" "}
            <Link href="#" sx={{ color: "black", borderBottomColor: "black" }}>
              2018 Recipe of the Year
            </Link>{" "}
            — uses the simplest ingredients, but is incredibly moist and flavorful. While the recipe calls for a 50/50
            mix of flours (all-purpose and whole wheat), we often make the bread 100% whole wheat, and honestly? No one
            can tell, it&apos;s that good! And not only is this bread delicious — it&apos;s versatile.
          </Typography>
          <Box
            sx={{
              display: "flex",
              mt: 2,
              gap: 5,
              fontWeight: "fontWeightBold",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <AccessTimeIcon fontSize="large" />
              <Box sx={{ ml: 1 }}>
                <Typography variant="body2" fontWeight={600}>
                  PREP
                </Typography>
                <Typography variant="body2" fontWeight={600}>
                  10 mins
                </Typography>
              </Box>
            </Box>
            <Box>
              <Typography variant="body2" fontWeight={600}>
                BAKE
              </Typography>
              <Typography variant="body2" fontWeight={600}>
                1 hr to 1 hr 15 mins
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" fontWeight={600}>
                TOTAL
              </Typography>
              <Typography variant="body2" fontWeight={600}>
                1 hr 10 mins
              </Typography>
            </Box>
          </Box>
          <Divider sx={{ my: 2 }} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              py: 3,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <GroupWorkRoundedIcon fontSize="large" />
              <Box sx={{ ml: 1 }}>
                <Typography variant="body2" fontWeight={600} fontSize={"small"}>
                  YIELD
                </Typography>
                <Typography variant="body2" fontWeight={600}>
                  1 loaf, 12 generous servings
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Button variant="outlined" color="error" startIcon={<AddOutlinedIcon />}>
                SAVE RECIPE
              </Button>
              <Button variant="outlined" color="error" startIcon={<PrintOutlinedIcon />}>
                PRINT
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          position: "relative",
          flex: 1,
          height: 400,
          borderRadius: 1,
          overflow: "hidden",
        }}
      >
        <Image src="/images/bread.webp" alt="Banana Bread" layout="fill" objectFit="cover" priority />
      </Box>
    </Box>
  );
};

export default RecipeDetails;
