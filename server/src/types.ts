import { Prisma } from "@prisma/client";

// Recipe with ingredients
const recipeWithIngredients = Prisma.validator<Prisma.RecipeDefaultArgs>()({
    include: { ingredients: true },
  })

export type RecipeWithIngredients = Prisma.RecipeGetPayload<typeof recipeWithIngredients>;