import { useState } from "react";
import { IngredientCard } from "./Card";
import { QuantitySelector } from "./QuantitySelector";
import { useQuery } from "@tanstack/react-query";
import { Ingredient, Season } from "../models/Ingredient";

export function IngredientDisplayer()
{
    const [nbPersons, setNbPersons] = useState(1);

    async function fetchIngredients() {
        const response = await fetch("/api/ingredients");
        return await response.json();
    }
    
    const { isLoading, error, data } = useQuery({queryKey: ["ingredients"], queryFn: fetchIngredients});

    //if (isLoading) return <div>Loading...</div>;

    //if (error) return <div>Error: {error.name + " : " + error.message}</div>;

    // FOR TESTING PURPOSES ONLY
    const dataTemp = [new Ingredient( 1, "Tomato", "Vegetable", Season.SUMMER),
                      new Ingredient( 2, "Potato", "Vegetable", Season.WINTER),
                      new Ingredient( 3, "Carrot", "Vegetable", Season.FALL),
                      new Ingredient( 4, "Apple", "Fruit", Season.FALL),
                      new Ingredient( 5, "Banana", "Fruit", Season.SUMMER),];

    return (
        <div>
            <h2>Ingredients</h2>
            <QuantitySelector nbPersons={nbPersons} setNbPersons={setNbPersons}/>
            <ul>
                {dataTemp.map((ingredient: Ingredient) => (
                    <IngredientCard key={ingredient.id} ingredient={ingredient} nbPersons={nbPersons}/>
                ))}
            </ul>
        </div>
    );
}