import { useState } from "react";
import { IngredientCard } from "./Card";

export function IngredientDisplayer()
{
    const [nbPersons, setNbPersons] = useState(1);
    const [ingredients, setIngredients] = useState([]);

    return (
        <div>
            <h2>Ingredients</h2>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <IngredientCard key={index} ingredient={ingredient} nbPersons={nbPersons} />
                ))}
            </ul>
        </div>
    );
}