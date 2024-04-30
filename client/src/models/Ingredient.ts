export enum Season{
    WINTER = 1,
    SPRING = 2,
    SUMMER = 3,
    FALL = 4
}

export class Ingredient {
    id: number;
    name: string;
    category: string;
    season: Season;
    recipe: IngredientQuantity;
    
    constructor(id: number, name: string, category: string, season: Season, recipe: IngredientQuantity) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.season = season;
        this.recipe = recipe;
    }
}

export class IngredientQuantity {
    ingredient: Ingredient;
    number: number;
    recipe : number;
    
    constructor(ingredient: Ingredient, number: number, recipe: number) {
        this.ingredient = ingredient;
        this.number = number;
        this.recipe = recipe;
    }
}