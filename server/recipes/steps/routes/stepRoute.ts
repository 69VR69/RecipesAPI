import express from 'express';
import { StepService } from '../services/stepService.js';

const router = express.Router();
const stepService = new StepService();

// GET /api/ingredients - Get all step of the recipe
router.get('/', stepService.getSteps);

// POST /api/ingredient - add a new step to a recipe
router.post('/', stepService.createStep);

//GET /api/ingredients/1 - get a stepe by id 
router.get('/:id', stepService.getStep);


//PUT /api/ingredients/1 - Update a a step 
router.put('/:id', stepService.updateStep);

//DELETE /api/ingredients/1 - Delete a step 
router.delete('/:id', stepService.deleteStep)




export default router;