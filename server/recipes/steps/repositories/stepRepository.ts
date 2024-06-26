import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { StepWithIngredients, StepWithIngredientsWithoutId } from '../types.js';

const prisma = new PrismaClient();

export class StepRepository {
    // Create a new Step
    public async createStep({ description, ingredient, recipeId }: StepWithIngredientsWithoutId): Promise<StepWithIngredients> {
        const newStep = await prisma.step.create({
            data: {
                description,
                recipeId: +recipeId,
                ingredient: {
                    create: ingredient
                }
            },
            include: {
                ingredient: true
            }
        });

        return newStep;
    }

    // Get all steps
    public async getSteps(req: Request<StepWithIngredients>, res: Response, recipeId: number) {
        const steps = await prisma.step.findMany({
            where: {
                recipeId: +recipeId,
            },
        });
        res.json(steps);
    }

    // Get an Step
    public async getStep(req: Request<StepWithIngredients>, res: Response) {
        const { id } = req.params;
        const step = await prisma.step.findUnique({
            where: {
                id: +id
            }
        });
        res.json(step);
    }

    // Update an Step
    public async updateStep(req: Request<StepWithIngredients>, res: Response, rid: number) {
        console.log("number?")
        const { id } = req.params;
        const { description, ingredients } = req.body;
        const recipeId = +rid;
        const updatedStep = await prisma.step.update({
            where: {
                id: +id
            },
            data: {
                description: description,
                recipeId: +recipeId,
                ingredient: {
                    create: ingredients,
                },
            },
            include: {
                ingredient: true
            }
        });
        res.json(updatedStep);
    }



    // Delete an step
    public async deleteStep(req: Request<StepWithIngredients>, res: Response) {
        const { id } = req.params;
        const deletedStep = await prisma.step.delete({
            where: {
                id: +id
            }
        });
        res.json(deletedStep);
    }
}