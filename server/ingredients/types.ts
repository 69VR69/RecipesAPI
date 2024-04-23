import { Prisma } from "@prisma/client";

// Ingredients
const Ingredients = Prisma.validator<Prisma.IngredientDefaultArgs>()({
  //include: { ingredients: true }, // TODO completer avec les saison maybe
})

export type Ingredients = Prisma.IngredientGetPayload<typeof Ingredients>;

// ingredients without id
export type IngredientsWithoutId = Omit<Ingredients, "id">; 

// Recipe with ingredients but without id
//export type RecipeWithIngredientsWithoutId = Omit<RecipeWithIngredients, "id">; //pour l'instant je sais pas a quoi ca sert 