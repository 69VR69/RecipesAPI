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
    
    constructor(id: number, name: string, category: string, season: Season) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.season = season;
    }
}

export class IngredientQuantity {
    ingredient: Ingredient;
    quantity: number;
    unit : string;
    
    constructor(ingredient: Ingredient, quantity: number, unit: string) {
        this.ingredient = ingredient;
        this.quantity = quantity;
        this.unit = unit;
    }
}