import Link from "next/link";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// Mocking an API call
const fetchRecipes = async (): Promise<{ id: number; title: string }[]> => {
  // FOR TESTING ERROR BOUNDARY:
  // throw new Error("Failed to fetch recipes");

  return new Promise((resolve) =>
    setTimeout(() => {
      resolve([
        { id: 1, title: "Whole-grain Banana Bread" },
        { id: 2, title: "Whole-grain Banana Bread" },
        { id: 3, title: "Whole-grain Banana Bread" },
      ]);
    }, 1000)
  );
};

interface Recipe {
  id: number;
  title: string;
}

const RecipesList = async () => {
  const recipes: Recipe[] = await fetchRecipes();
  return (
    <Box component="main" sx={{ maxWidth: "1200px", mx: "auto", mt: 5 }}>
      <div>
        {recipes.map((recipe) => (
          <Box key={recipe.id} sx={{ mb: 2 }}>
            <Link href={`/recipes/${recipe.id}`}>
              <Typography variant="h4">
                {recipe.title} - {recipe.id}
              </Typography>
            </Link>
          </Box>
        ))}
      </div>
    </Box>
  );
};

export default RecipesList;
