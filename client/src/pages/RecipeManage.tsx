import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { IngredientDisplayer } from "../components/IngredientDisplayer";
import { StepDisplayer } from "../components/StepDisplayer";
import { SERVER_ADDRESS } from "../CONSTANTS";
import { Recipe } from "../models/Recipe";


export function RecipeManage()
{
    const { recipeId } = useParams();
    const parsedRecipeId = recipeId ? parseInt(recipeId) : 0;

    async function fetchRecipes()
    {
        return fetch(SERVER_ADDRESS + '/recipes/' + parsedRecipeId)
        .then(res => res.json())
        .then(data => data as Recipe);
    }

    const { isLoading, error, data } = useQuery({ queryKey: ["recipes"], queryFn: fetchRecipes });

    if (isLoading) return <div>Loading...</div>;

    if (error) return <div>Error: {error.name + " : " + error.message + "\n" + error.stack}</div>;

    return (
        <div>
            <h1>Recipes of {data ? data.name : 'recipe number ' + parsedRecipeId}</h1>
            <IngredientDisplayer recipeId={parsedRecipeId} />
            <StepDisplayer recipeId={parsedRecipeId}/>
        </div>
    )
}