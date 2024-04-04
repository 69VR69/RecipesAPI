import { Request, Response } from 'express';
import { IngredientRepository } from '../repositories/ingredientRepository'
import { Ingredients } from '../types';

const ingredientRepository = new IngredientRepository();

export class IngredientService {

    // Create a new ingredient
    async createIngredient(req: Request<Ingredients>, res: Response) {
        const { name, category, season }: Ingredients = req.body;
        try {
            const newIngrdedient= await ingredientRepository.createIngredient({ name, category, season });
            res.status(201).json(newIngrdedient)
        }
        catch (error : any) {
            res.status(500).json({ error: error.message });
        }
    }

    // Get all recipes
    public async getIngredients(req: Request<Ingredients>, res: Response) {
        try {
            const ingredient = null
            res.json(ingredient)
        }
        catch (error : any) {
            res.status(500).json({ error: error.message });
        }
    }
}