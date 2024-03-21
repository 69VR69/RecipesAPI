import express from 'express';
import { RecipeService } from '../services/recipeService';

const router = express.Router();
const recipeService = new RecipeService();

// GET /api/recipes - Get all recipes
router.get('/', recipeService.getRecipes);

// POST /api/recipes - Create a new recipe
router.post('/', recipeService.createRecipe);

export default router;