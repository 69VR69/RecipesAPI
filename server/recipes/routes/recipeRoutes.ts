import express from 'express';
import { Request, Response } from 'express';
import { RecipeService } from '../services/recipeService.js';
import { RecipeWithIngredients } from '../types.js';
import { RecipeCreateSchema } from '../../prisma/generated/schemas/createOneRecipe.schema.js';
import Joi from 'joi';

const router = express.Router();
const recipeService = new RecipeService();

// GET /api/recipes - Get all recipes
router.get('/', (req, resp) => {
    recipeService.getRecipes(req, resp);
});

// POST /api/recipes - Create a new recipe
router.post('/', (req, rep) => {
    let recipe = req.body;

    // Validate the recipe
    const res = RecipeCreateSchema.validate(recipe)
    if (res.error) {
        rep.status(400).send(res.error.message);
        return;
    }

    recipeService.createRecipe(recipe, rep)
        .then((recipe) => {
            rep.status(201).json(recipe);
        })
        .catch((error) => {
            console.error(error);
            rep.status(500).send('Internal Server Error');
        });
});

// GET /api/recipes/<ID> - Get a recipe by ID
router.get('/:id',
    (req, rep) => {

        // Validate the recipe ID
        const recipeId = req.params.id;
        if (!recipeId) {
            rep.status(400).send('Recipe ID is required');
            return;
        }

        // check if the recipe id is a number
        if (Joi.number().validate(recipeId).error) {
            rep.status(400).send('Recipe ID must be a number');
            return;
        }

        const id = parseInt(recipeId);

        recipeService.getRecipe(id, rep);
    }
);

// PUT /api/recipes/<ID> - Update a recipe
router.put('/:id',
    (req, rep) => {
        const recipe = req.body;
        const recipeId = req.params.id;

        // Validate the recipe
        const res = RecipeCreateSchema.validate(recipe)
        if (res.error) {
            rep.status(400).send(res.error.message);
            return;
        }

        // check if the recipe id is a number
        if (Joi.number().validate(recipeId).error) {
            rep.status(400).send('Recipe ID must be a number');
            return;
        }

        const id = parseInt(recipeId);

        recipeService.updateRecipe(id, recipe, rep)
            .then((recipe) => {
                rep.status(204).json(recipe);
            })
            .catch((error) => {
                console.error(error);
                rep.status(500).send('Internal Server Error');
            });
    }
);

// DELETE /api/recipes/<ID> - Delete a recipe
router.delete('/:id', recipeService.deleteRecipe);

// TODO
// GET /api/recipes/<ID>/steps
// POST /api/recipes/<ID>/steps
// GET /api/recipes/<RECIPE_ID>/steps/<STEP_ID>
// PUT /api/recipes/<RECIPE_ID>/steps/<STEP_ID>
// DELETE /api/recipes/<RECIPE_ID>/steps/<STEP_ID>


export default router;