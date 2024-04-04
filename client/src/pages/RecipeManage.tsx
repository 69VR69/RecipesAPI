import { useParams } from "react-router-dom"
import { IngredientDisplayer } from "../components/IngredientDisplayer";
import { StepDisplayer } from "../components/StepDisplayer";


export function RecipeManage()
{
    const recipeId = useParams().recipeId;

    return (
        <div>
            <h1>Recipes Manage of {recipeId}</h1>
            <IngredientDisplayer />
            <StepDisplayer />
        </div>
    )
}