import { IngredientQuantity } from "./Ingredient";

export class Step {
    id: number;
    description: string;
    ingredients : IngredientQuantity[];

    constructor(id: number, description: string, ingredients: IngredientQuantity[]) {
        this.id = id;
        this.description = description;
        this.ingredients = ingredients;
    }
}