import { useParams } from "react-router-dom"
import { IngredientDisplayer } from "../components/IngredientDisplayer";
import { StepDisplayer } from "../components/StepDisplayer";


export function RecipeManage()
{
    const { recipeId } = useParams();
    const parsedRecipeId = recipeId ? parseInt(recipeId) : 0;

    return (
        <div>
            <h1>Recipes Manage of {parsedRecipeId}</h1>
            <IngredientDisplayer recipeId={parsedRecipeId} />
            <StepDisplayer recipeId={parsedRecipeId}/>
        </div>
    )
}