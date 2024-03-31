import { Request, Response } from 'express';
import { RecipeRepository } from '../repositories/recipeRepository'
import { RecipeWithIngredients } from '../types';

const recipeRepository = new RecipeRepository();

export class RecipeService {

    // Create a new recipe
    async createRecipe(req: Request<RecipeWithIngredients>, res: Response) {
        const { name, ingredients }: RecipeWithIngredients = req.body;
        try {
            const newRecipe = await recipeRepository.createRecipe({ name, ingredients });
            res.status(201).json(newRecipe)
        }
        catch (error : any) {
            res.status(500).json({ error: error.message });
        }
    }

    // Get all recipes
    public async getRecipes(req: Request<RecipeWithIngredients>, res: Response) {
        try {
            const recipes = null// await RecipeRepository.getRecipes();
            res.json(recipes)
        }
        catch (error : any) {
            res.status(500).json({ error: error.message });
        }
    }
}