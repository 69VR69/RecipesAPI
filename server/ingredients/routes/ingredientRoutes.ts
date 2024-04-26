import express from 'express';
import { IngredientService } from '../services/ingredientService.js';

const router = express.Router();
const ingredientService = new IngredientService();

// GET /api/ingredients - Get all ingredients //si base vide alors on renvoie un []
router.get('/', ingredientService.getIngredients);


//GET /api/ingredients/1 - get an ingredient by id 
router.get('/:id', ingredientService.getIngredient);

// POST /api/ingredient - Create a new ingredients
router.post('/', ingredientService.createIngredient);

//PUT /api/ingredients/1 - Update an ingredient 
router.put('/:id',ingredientService.updateIngredient);

//DELETE /api/ingredients/1 - Delete an ingredient 
router.delete('/:id',ingredientService.deleteIngredient) 

//PUT /api/ingredient/1/a




export default router;