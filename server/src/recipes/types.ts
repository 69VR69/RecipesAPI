import { Prisma } from "@prisma/client";

// Recipe with ingredients
const recipeWithIngredients = Prisma.validator<Prisma.RecipeDefaultArgs>()({
    include: { ingredient: true },
  })

export type RecipeWithIngredients = Prisma.RecipeGetPayload<typeof recipeWithIngredients>;

// Recipe with ingredients but without id
export type RecipeWithIngredientsWithoutId = Omit<RecipeWithIngredients, "id">;