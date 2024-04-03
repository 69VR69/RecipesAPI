
export function Card({children}: {children: React.ReactNode}) {
    return (
        <div>
            <h2>Card</h2>
            {children}
        </div>
    );
}

export function IngredientCard({ingredient, nbPersons}: {ingredient: string, nbPersons: number})
{
    return (
        <Card>
            <h3>{ingredient}</h3>
            <p>Pour {nbPersons} personnes</p>
        </Card>
    );
}