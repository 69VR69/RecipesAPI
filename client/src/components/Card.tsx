import { Ingredient, Season } from "../models/Ingredient";

export function Card({children}: {children: React.ReactNode}) {
    return (
        <div>
            <h2>Card</h2>
            {children}
        </div>
    );
}

export function IngredientCard({ingredient, nbPersons}: {ingredient: Ingredient, nbPersons: number})
{

    function getSeasonIcon (season : Season)
    {
        switch (season) {
            case Season.WINTER:
                return "❄️";
            case Season.SPRING:
                return "🌸";
            case Season.SUMMER:
                return "🌞";
            case Season.FALL:
                return "🍂";
        }
    }

    return (
        <Card>
            <h3>{ingredient.name}</h3>
            <p>{ingredient.category}</p>
            <p>Saison : {getSeasonIcon(ingredient.season)}</p>
            <p>Pour {nbPersons} personnes</p>
        </Card>
    );
}

export function StepCard({description, ingredients}: {description: string, ingredients: {ingredient: Ingredient, quantity: number}[]})
{
    return (
        <Card>
            <p>{description}</p>
            <ul>
                {ingredients.map((ingredientQuantity, index) => (
                    <li key={index}>{ingredientQuantity.ingredient.name} : {ingredientQuantity.quantity}</li>
                ))}
            </ul>
        </Card>
    );
}