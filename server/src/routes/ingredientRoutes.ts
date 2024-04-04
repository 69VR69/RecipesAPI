import express from 'express';
import { IngredientService } from '../services/ingredientService';

const router = express.Router();
const ingredientService = new IngredientService();

// GET /api/recipes - Get all recipes
//router.get('/', ingredientService.getRecipes);

// POST /api/recipes - Create a new recipe
//router.post('/', ingredientService.createRecipe);

export default router;