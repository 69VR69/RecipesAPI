import { Request, Response } from 'express';
import { StepRepository } from '../repositories/StepRepository.js'
import { Steps } from '../types.js';

const StepRepository = new StepRepository();

export class stepService {


    // Get all step
    public async getSteps(req: Request<Steps>, res: Response) {
        try {
            const step = await StepRepository.getSteps(req,res);
            res.status(200).json(step)
        }
        catch (error : any) {
            res.status(500).json({ error: error.message });
        }
    }

    // Get an step by id
    public async getStep(req: Request<Steps>, res: Response) {
        try {
            const step = await StepRepository.getStep(req,res);
            res.status(200).json(step)
        }
        catch (error : any) {
            res.status(500).json({ error: error.message });
        }
    }


    //update a step
    public async updateStep(req: Request<Steps>, res: Response){
        try {
            await StepRepository.updateStep(req,res)
            res.status(204).json({msg: "Successfully update step " + req.params.id})
        }
        catch (error : any){
            res.status(500).json({error: error.message})
        }
    }


    //delete a step 
    public async deleteStep(req: Request<Steps>, res: Response){
        try {
            await StepRepository.deleteStep(req,res)
            res.status(204).json({msg: "Successfully deleted step " + req.params.id})
        }
        catch (error : any){
            res.status(500).json({error: error.message})
        }
    }


    // Create a new ingredient
    async createIngredient(req: Request<Steps>, res: Response) {
        const { name, category, season }: Steps = req.body;
        try {
            const newIngrdedient= await StepRepository.createIngredient({ name, category, season });
        res.status(201).json(newIngrdedient)
        }
        catch (error : any) {
            res.status(500).json({ error: error.message });
        }
    }
}