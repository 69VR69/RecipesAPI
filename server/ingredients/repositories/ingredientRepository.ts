import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { Ingredients,IngredientsWithoutId } from '../types.js';

const prisma = new PrismaClient();

export class IngredientRepository{
    // Create a new Ingredient
    public async createIngredient({ name, category, season }: IngredientsWithoutId) : Promise<Ingredients>
    {
        const newIngredient = await prisma.ingredient.create({
            data: {
                name,
                category,
                season
            }
        });

        return newIngredient;
    }

    // Get all ingredients
    public async getIngredients(req: Request<Ingredients>, res: Response) {
        const ingredients = await prisma.ingredient.findMany({});
        res.json(ingredients);
    }

    // Get an Ingredient
    async getIngredient(req: Request<Ingredients>, res: Response) {
        const { id } = req.params;
        const ingredient = await prisma.ingredient.findUnique({
            where: {
                id: +id
            }
        });
        res.json(ingredient);
    }

    // Update an Ingredient
    async updateIngredient(req: Request<Ingredients>, res: Response) {
        const { id } = req.params;
        const { name, category, season } = req.body;
        const updatedIngredient = await prisma.ingredient.update({
            where: {
                id: id
            },
            data: {
                name,
                category,
                season
            }
        });
        res.json(updatedIngredient);
    }



    // Delete an ingredient
    async deleteIngredient(req: Request<Ingredients>, res: Response) {
        const { id } = req.params;
        const deletedIngredient = await prisma.ingredient.delete({
            where: {
                id: id
            }
        });
        res.json(deletedIngredient);
    }
}