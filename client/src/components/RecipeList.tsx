import { useQuery } from "@tanstack/react-query";
import { Recipe } from "../models/Recipe";
import { RecipeCard } from "./Card";
import { SERVER_ADDRESS } from "../CONSTANTS";

export function RecipeList()
{
    async function fetchRecipes()
    {
        return fetch(SERVER_ADDRESS + '/recipes')
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
                {data && data.map(({id,name}) => (
                    <RecipeCard key={id} id={id} name={name}/>
                ))}
            </ul>
        </div>
    );
}