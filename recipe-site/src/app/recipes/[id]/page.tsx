import RecipeDetails from "@/features/recipe/components/RecipeDetails";
export default function RecipeDetailsPage({ params: { id } }: { params: { id: string } }) {
  return <RecipeDetails recipeId={id} />;
}
