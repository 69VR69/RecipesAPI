import { IngredientQuantity } from "./Ingredient";
import { Step } from "./Step";

export class Recipe {
    id: number;
    name: string;
    ingredients: IngredientQuantity[];
    steps: Step[];
    
    constructor(id: number, name: string, ingredients: IngredientQuantity[], steps: Step[]) {
        this.id = id;
        this.name = name;
        this.ingredients = ingredients;
        this.steps = steps;
    }
}