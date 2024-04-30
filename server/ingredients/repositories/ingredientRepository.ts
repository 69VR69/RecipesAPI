import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { Ingredients, IngredientsWithoutId } from '../types.js';

const prisma = new PrismaClient();

export class IngredientRepository {
    // Create a new Ingredient
    public async createIngredient(ingredient: IngredientsWithoutId): Promise<Ingredients> {
        return await prisma.ingredient.create({
            data: ingredient
        });
    }

    // Get all ingredients
    public async getIngredients(req: Request, res: Response) {
        const recipeId = parseInt(req.query.recipeId as string | undefined);

        const ingredients = await prisma.ingredient
            .findMany({ include: { recipe: true } })
            .then((ingredients) => {
                if (recipeId) {
                    return ingredients
                        .filter((ingredient) => ingredient.recipe.some((recipe) => recipe.recipe === recipeId))
                        .map((ingredient) => {
                            ingredient.recipe = ingredient.recipe.filter((recipe) => recipe.recipe === recipeId);
                            return ingredient;
                        });
                }

                return ingredients;
            });

        res.json(ingredients);
    }

    // Get an Ingredient
    public async getIngredient(id: number, res: Response) : Promise<void>
    {
        await prisma.ingredient
            .findUnique({where : {id: id}, include: { recipe: true }})
            .then((ingredients) => res.json(ingredients));
    }

    // Update an Ingredient
    public async updateIngredient(id:number, ingredient : IngredientsWithoutId, res: Response) : Promise<void>
    {
        prisma.ingredient.update({
            where: {
                id: id
            },
            data: ingredient
        })
        .then((updatedIngredient) => res.json(updatedIngredient));
    }



    // Delete an ingredient
    public async deleteIngredient(id : number, res: Response) : Promise<void>
    {
        prisma.ingredient.delete({
            where: {
                id: id
            }
        })
        .then(() => res.json({msg: "Successfully deleted ingredient " + id}));
    }
}