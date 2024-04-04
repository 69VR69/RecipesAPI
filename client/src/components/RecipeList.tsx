import { useQuery } from "@tanstack/react-query";
import { Recipe } from "../models/Recipe";

export function RecipeList()
{
    async function fetchRecipes()
    {
        const url = 'http://localhost:3001/recipe';
        return fetch(url)
            .then(res => res.json())
            .then(data => data as Recipe[]);
    }

    const { isLoading, error, data } = useQuery({ queryKey: ["recipes"], queryFn: fetchRecipes });

    if (isLoading) return <div>Loading...</div>;

    if (error) return <div>Error: {error.name + " : " + error.message + "\n" + error.stack}</div>;



    return (
        <div>
            <h1>Recettes</h1>
            <ul>
                {/* {data.map((recipe: Recipe) => (
                    <li key={recipe.id}>{recipe.name}</li>
                ))} */}
            </ul>
        </div>
    );
}