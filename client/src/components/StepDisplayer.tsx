import { useQuery } from "@tanstack/react-query";
import { Ingredient, IngredientQuantity, Season } from "../models/Ingredient";
import { Step } from "../models/Step";
import { StepCard } from "./Card";

export function StepDisplayer() {

    async function getSteps() {
        const response = await fetch('http://localhost:3001/step');
        return await response.json();
    }

    const { isLoading, error, data } = useQuery({ queryKey: ["steps"], queryFn: getSteps });

    //if (isLoading) return <div>Loading...</div>;

    //if (error) return <div>Error: {error.name + " : " + error.message}</div>;

    // FOR TESTING PURPOSES ONLY
    const ingredient1 = new Ingredient(1, "Tomato", "Vegetable", Season.SUMMER);
    const ingredient2 = new Ingredient(2, "Potato", "Vegetable", Season.WINTER);
    const ingredientQuantity1 = new IngredientQuantity(ingredient1, 2);
    const ingredientQuantity2 = new IngredientQuantity(ingredient2, 3);
    const dataTemp = [new Step(1, "Step 1", [ingredientQuantity1]),
    new Step(2, "Step 2", [ingredientQuantity2]),
    new Step(3, "Step 3", [ingredientQuantity1, ingredientQuantity2]),
    new Step(4, "Step 4", [ingredientQuantity1])];

    return (
        <div>
            <h2>Steps</h2>
            <ul>
                {dataTemp.map((step, index) => (
                    <StepCard key={index} description={step.description} ingredients={step.ingredients} />
                ))}
            </ul>
        </div>
    )
}