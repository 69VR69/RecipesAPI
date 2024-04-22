import { Ingredient, Season } from "../models/Ingredient";
import { ButtonRedirect } from "./Button";

export function Card({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={"card " + className}>
            {children}
        </div>
    );
}

export function RecipeCard({ name, id }: { name: string, id: number }) {
    return (
        <Card>
            <h3>{name}</h3>
            <ButtonRedirect path={`/recipes/${id}`}>Voir la recette</ButtonRedirect>
        </Card>
    );
}

export function IngredientCard({ ingredient, nbPersons }: { ingredient: Ingredient, nbPersons: number }) {

    function getSeasonIcon(season: Season) {
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
        <Card className="card-ingredient">
            <div className="card-ingredient-content">
                <h3 className="ingredient-name">{ingredient.name}</h3>
                <p>{ingredient.category}</p>
                <p>Saison : {getSeasonIcon(ingredient.season)}</p>
                <p>Pour {nbPersons} personnes</p>
            </div>
        </Card>
    );
}

export function StepCard({ description, ingredients }: { description: string, ingredients: { ingredient: Ingredient, quantity: number }[] }) {
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