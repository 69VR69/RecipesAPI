import { useParams } from "react-router-dom"


export function RecipeManage()
{
    const recipeId = useParams().recipeId;

    return (
        <div>
            <h1>Recipes Manage of {recipeId}</h1>
        </div>
    )
}