import { Request, Response } from 'express';
import { IngredientRepository } from '../repositories/ingredientRepository.js'
import { Ingredients } from '../types.js';

const ingredientRepository = new IngredientRepository();

export class IngredientService {


    // Get all Ingredient
    public async getIngredients(req: Request<Ingredients>, res: Response) {
        try {
            const ingredient = await ingredientRepository.getIngredients(req,res);
            res.status(200).json(ingredient)
        }
        catch (error : any) {
            res.status(500).json({ error: error.message });
        }
    }

    // Get an ingrdient by id
    public async getIngredient(req: Request<Ingredients>, res: Response) {
        try {
            const ingredient = await ingredientRepository.getIngredient(req,res);
            res.status(200).json(ingredient)
        }
        catch (error : any) {
            res.status(500).json({ error: error.message });
        }
    }


    //update an ingrdient 
    public async updateIngredient(req: Request<Ingredients>, res: Response){
        try {
            await ingredientRepository.updateIngredient(req,res)
            res.status(204).json({msg: "Successfully update ingredient " + req.params.id})
        }
        catch (error : any){
            res.status(500).json({error: error.message})
        }
    }


    //delete an ingredient 
    public async deleteIngredient(req: Request<Ingredients>, res: Response){
        try {
            await ingredientRepository.deleteIngredient(req,res)
            res.status(204).json({msg: "Successfully deleted ingredient " + req.params.id})
        }
        catch (error : any){
            res.status(500).json({error: error.message})
        }
    }


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
}