import { Request, Response } from 'express';
import { RecipeRepository } from '../repositories/recipeRepository.js'
import { RecipeWithIngredients } from '../types.js';

const recipeRepository = new RecipeRepository();

export class RecipeService {

    // Create a new recipe
    async createRecipe(req: Request<RecipeWithIngredients>, res: Response) {
        const { name, ingredient }: RecipeWithIngredients = req.body;
        try {
            const newRecipe = await recipeRepository.createRecipe({ name, ingredient });
            res.status(201).json(newRecipe)
        }
        catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    // Get all recipes
    public async getRecipes(req: Request, res: Response) {
        try {
            const recipes = await recipeRepository.getRecipes(req, res);
            res.status(200).json(recipes)
        }
        catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    // Get recipe by id
    public async getRecipe(id: number, res: Response) {
        try {
            const recipes = await recipeRepository.getRecipe(id, res)
            res.status(200).json(recipes)
        }
        catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    // Update recipe
    public async updateRecipe(id: number, req: Request<RecipeWithIngredients>, res: Response) {
        try {
            await recipeRepository.updateRecipe(id, req, res)
            res.status(204).json({ msg: "Successfully updated recipe " + id })
        }
        catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    // Delete recipe
    public async deleteRecipe(req: Request<RecipeWithIngredients>, res: Response) {
        try {
            await recipeRepository.deleteRecipe(req, res)
            res.status(204).json({ msg: "Successfully deleted recipe " + req.params.id })
        }
        catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }
}