import express from 'express';
import { Request, Response } from 'express';
import { RecipeService } from '../services/recipeService.js';
import { RecipeWithIngredients } from '../types.js';

const router = express.Router();
const recipeService = new RecipeService();

// GET /api/recipes - Get all recipes
router.get('/', async (req : Request<RecipeWithIngredients>, resp) => {
    try {
        const recipes = await recipeService.getRecipes(req, resp);
        resp.json(recipes);
    } catch (error) {
        console.error(error);
        resp.status(500).send('Internal Server Error');
    }
});

// POST /api/recipes - Create a new recipe
router.post('/', recipeService.createRecipe);

// GET /api/recipes/<ID> - Get a recipe by ID
router.get('/:id', recipeService.getRecipe);

// PUT /api/recipes/<ID> - Update a recipe
router.put('/:id', recipeService.updateRecipe);

// DELETE /api/recipes/<ID> - Delete a recipe
router.delete('/:id', recipeService.deleteRecipe);

// POST /api/recipes/<ID>/cook - Cook a recipe, consuming ingredients in the process
router.post('/:id/cook', recipeService.cookRecipe);

// TODO
// GET /api/recipes/<ID>/steps
// POST /api/recipes/<ID>/steps
// GET /api/recipes/<RECIPE_ID>/steps/<STEP_ID>
// PUT /api/recipes/<RECIPE_ID>/steps/<STEP_ID>
// DELETE /api/recipes/<RECIPE_ID>/steps/<STEP_ID>


export default router;