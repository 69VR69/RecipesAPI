import { Prisma } from "@prisma/client";

// Step with ingredients
const stepWithIngredients = Prisma.validator<Prisma.StepDefaultArgs>()({
    include: { ingredient: true },
  })

export type StepWithIngredients = Prisma.StepGetPayload<typeof stepWithIngredients>;

// Step with ingredients but without id
export type StepWithIngredientsWithoutId = Omit<StepWithIngredients, "id">;