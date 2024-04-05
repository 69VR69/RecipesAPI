import express from 'express';
import { IngredientService } from '../services/ingredientService';

const router = express.Router();
const ingredientService = new IngredientService();

// GET /api/recipes - Get all recipes
router.get('/', ingredientService.getIngredients);

// POST /api/recipes - Create a new recipe
router.post('/', ingredientService.createIngredient);

export default router;