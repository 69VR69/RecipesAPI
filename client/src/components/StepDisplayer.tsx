import { useQuery } from "@tanstack/react-query";
import { StepCard } from "./Card";
import { SERVER_ADDRESS } from "../CONSTANTS.js";
import { Step } from "../models/Step.js";

export function StepDisplayer({ recipeId }: { recipeId: number }) {

    async function getSteps(): Promise<Step[]> {
        const response = await fetch(SERVER_ADDRESS + '/recipes/' + recipeId + '/steps');
        return await response.json();
    }

    const { isLoading, error, data } = useQuery({ queryKey: ["steps"], queryFn: getSteps });

    if (isLoading) return <div>Loading...</div>;

    if (error) return <div>Error: {error.name + " : " + error.message}</div>;

    return (
        <div>
            <h2>Steps</h2>
            <ul>
                {data && data.map((step, index) => (
                    <StepCard key={index} description={step.description} ingredients={step.ingredients} />
                ))}
            </ul>
        </div>
    )
}