import { Request, Response } from 'express';
import { StepRepository } from '../repositories/stepRepository.js'
import { StepWithIngredients } from '../types.js';
import { Console } from 'console';

const stepRepository = new StepRepository();

export class StepService {


    // Get all step
    public async getSteps(req: Request<StepWithIngredients>, res: Response) {
        try {
            console.log(req.params);
            const recipeId = rid;
            const step = await stepRepository.getSteps(req,res,recipeId);
            res.status(200).json(step)
        }
        catch (error : any) {
            res.status(500).json({ error: error.message });
        }
    }

    // Get an step by id
    public async getStep(req: Request<StepWithIngredients>, res: Response) {
        try {
            const step = await stepRepository.getStep(req,res);
            res.status(200).json(step)
        }
        catch (error : any) {
            res.status(500).json({ error: error.message });
        }
    }


    //update a step
    public async updateStep(req: Request<StepWithIngredients>, res: Response){
        try {
            await stepRepository.updateStep(req,res)
            res.status(204).json({msg: "Successfully update step " + req.params.id})
        }
        catch (error : any){
            res.status(500).json({error: error.message})
        }
    }


    //delete a step 
    public async deleteStep(req: Request<StepWithIngredients>, res: Response){
        try {
            await stepRepository.deleteStep(req,res)
            res.status(204).json({msg: "Successfully deleted step " + req.params.id})
        }
        catch (error : any){
            res.status(500).json({error: error.message})
        }
    }


    // Create a new step
    async createStep(req: Request<StepWithIngredients>, res: Response) {
        const { description, ingredient }: StepWithIngredients = req.body;
        const recipeId = req.params.recipeId;
        try {
            const newIngrdedient= await stepRepository.createStep({ description, ingredient, recipeId });
        res.status(201).json(newIngrdedient)
        }
        catch (error : any) {
            res.status(500).json({ error: error.message });
        }
    }
}