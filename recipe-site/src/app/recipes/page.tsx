import { Suspense } from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Loading from "@/components/shared/Loading";
import RecipesList from "@/features/recipe/components/RecipesList";

export default function RecipesPage() {
  return (
    <Box component="main" sx={{ maxWidth: "1200px", mx: "auto", mt: 5 }}>
      <Box sx={{ flex: 1 }}>
        <Box component="header">
          <Typography variant="h2" sx={{ mt: 2, fontWeight: "bold" }}>
            Recipies
          </Typography>
        </Box>
      </Box>
      <Box>
        <Suspense fallback={<Loading />}>
          <RecipesList />
        </Suspense>
      </Box>
    </Box>
  );
}
