import Link from "next/link";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
interface Recipe {
  recipe: {
    label: string;
  };
}

const RecipesList = async () => {
  const URL = `${process.env.URL}?q=${"bread"}&app_id=${process.env.APP_ID}&app_key=${
    process.env.APP_KEY
  }&from=0&to=3&calories=591-722&health=alcohol-free`;
  const res = await fetch(URL);
  const data = await res.json();
  const recipes: Recipe[] = data.hits;

  return (
    <Box component="main" sx={{ maxWidth: "1200px", mx: "auto", mt: 5 }}>
      <div>
        {recipes.map((recipe) => (
          <Box key={recipe.recipe.label} sx={{ mb: 2 }}>
            <Link href={`/recipes/${recipe.recipe.label.replaceAll(" ", "-")}`}>
              <Typography variant="h4">{recipe.recipe.label}</Typography>
            </Link>
          </Box>
        ))}
      </div>
    </Box>
  );
};

export default RecipesList;
