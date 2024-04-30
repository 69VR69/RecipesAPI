import { Request, Response } from 'express';
import { IngredientRepository } from '../repositories/ingredientRepository.js'
import { Ingredients, IngredientsWithoutId } from '../types.js';

const ingredientRepository = new IngredientRepository();

export class IngredientService {


    // Get all Ingredient
    public async getIngredients(req: Request, res: Response) {
        try {
            const ingredient = await ingredientRepository.getIngredients(req,res);
            res.status(200).json(ingredient)
        }
        catch (error : any) {
            res.status(500).json({ error: error.message });
        }
    }

    // Get an ingrdient by id
    public async getIngredient(id : number, res: Response) {
        try {
            ingredientRepository.getIngredient(id,res)
            .then((ingredient) => {
                if(ingredient === null){
                    res.status(404).json({error: "Ingredient not found"})
                }
                else{
                    res.status(200).json(ingredient)
                }
            })
            .catch((error) => res.status(500).json({ error: error.message }));
        }
        catch (error : any) {
            res.status(500).json({ error: error.message });
        }
    }


    //update an ingrdient 
    public async updateIngredient(id: number, ingredient: IngredientsWithoutId, res: Response){
        try {
            await ingredientRepository.updateIngredient(id, ingredient,res)
            res.status(204).json({msg: "Successfully update ingredient " + id})
        }
        catch (error : any){
            res.status(500).json({error: error.message})
        }
    }


    //delete an ingredient 
    public async deleteIngredient(id : number, res: Response){
        try {
            await ingredientRepository.deleteIngredient(id,res)
            res.status(204).json({msg: "Successfully deleted ingredient " + id})
        }
        catch (error : any){
            res.status(500).json({error: error.message})
        }
    }


    // Create a new ingredient
    async createIngredient(ingredient: IngredientsWithoutId, res: Response) {
        try {
            const newIngrdedient= await ingredientRepository.createIngredient(ingredient);
        res.status(201).json(newIngrdedient)
        }
        catch (error : any) {
            res.status(500).json({ error: error.message });
        }
    }
}