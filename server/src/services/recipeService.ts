import { Request, Response } from 'express';
import { RecipeRepository } from '../repositories/recipeRepository'
import { RecipeWithIngredients } from '../types';
import { Recipe } from '@prisma/client';

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
            const recipes = await recipeRepository.getRecipes(req, res);
            res.status(200).json(recipes)
        }
        catch (error : any) {
            res.status(500).json({ error: error.message });
        }
    }

    // Get recipe by id
    public async getRecipe(req: Request<RecipeWithIngredients>, res: Response) {
        try {
            const recipes = await recipeRepository.getRecipe(req, res)
            res.status(200).json(recipes)
        }
        catch (error : any) {
            res.status(500).json({ error: error.message });
        }
    }

    // Update recipe
    public async updateRecipe(req: Request<RecipeWithIngredients>, res: Response) {
        try {
            await recipeRepository.updateRecipe(req, res)
            res.status(204).json({msg: "Successfully updated recipe " + req.params.id})
        }
        catch (error : any) {
            res.status(500).json({ error: error.message });
        }
    }

    // Delete recipe
    public async deleteRecipe(req: Request<RecipeWithIngredients>, res: Response) {
        try {
            await recipeRepository.deleteRecipe(req, res)
            res.status(204).json({msg: "Successfully deleted recipe " + req.params.id})
        }
        catch (error : any) {
            res.status(500).json({ error: error.message });
        }
    }

    public async cookRecipe(req: Request<RecipeWithIngredients>, res: Response) {
        try {
            await recipeRepository.cookRecipe(req, res)
            res.status(501)
        }
        catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }
}