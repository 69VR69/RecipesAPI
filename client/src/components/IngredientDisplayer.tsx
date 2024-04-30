import { useState } from "react";
import { IngredientCard } from "./Card";
import { QuantitySelector } from "./QuantitySelector";
import { useQuery } from "@tanstack/react-query";
import { Ingredient } from "../models/Ingredient";
import { SERVER_ADDRESS } from "../CONSTANTS";

export function IngredientDisplayer({ recipeId }: { recipeId: number }) {
    const [nbPersons, setNbPersons] = useState(1);

    async function fetchIngredients() {
        const response = await fetch(SERVER_ADDRESS + "/ingredients?recipeId=" + recipeId);
        return await response.json();
    }

    const { isLoading, error, data } = useQuery({ queryKey: ["ingredients"], queryFn: fetchIngredients });

    if (isLoading) return <div>Loading...</div>;

    if (error) return <div>Error: {error.name + " : " + error.message}</div>;

    return (
        <div>
            <h2>Ingredients</h2>
            <QuantitySelector nbPersons={nbPersons} setNbPersons={setNbPersons} />
            <ul className="mrtn-recette_ingredients-items">
                {data && data.map((ingredient: Ingredient) => (
                    <IngredientCard key={ingredient.id} ingredient={ingredient} nbPersons={nbPersons} />
                ))}
            </ul>
        </div>
    );
}