import express from 'express';
import { RecipeService } from '../services/recipeService.js';
import Joi from 'joi';
import { RecipeValidator, RecipeIdValidator } from './recipeValidator.js';
import { StepService } from '../steps/services/stepService.js';
import recipesRoute from '../steps/routes/stepRoute.js'

const router = express.Router();
const recipeService = new RecipeService();

// GET /api/recipes - Get all recipes
router.get('/', (req, resp) => {
    recipeService.getRecipes(req, resp)
    .then((recipes) => {
        resp.status(200).json(recipes);
    }
    )
});

// POST /api/recipes - Create a new recipe
router.post('/', (req, rep) => {
    let recipe = req.body;

    // Validate the recipe
    const res = RecipeValidator.validate(recipe)
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
        if (RecipeIdValidator.validate({ id: recipeId }).error) {
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
        const res = RecipeValidator.validate(recipe)
        if (res.error) {
            rep.status(400).send(res.error.message);
            return;
        }

        // check if the recipe id is a number
        if (RecipeIdValidator.validate({ id: recipeId }).error) {
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
router.delete('/:id',
    (req, rep) => {
        const recipeId = req.params.id;

        // check if the recipe id is a number
        if (RecipeIdValidator.validate({ id: recipeId }).error) {
            rep.status(400).send('Recipe ID must be a number');
            return;
        }

        const id = parseInt(recipeId);

        recipeService.deleteRecipe(id, rep)
            .then(() => {
                rep.status(204).send();
            })
            .catch((error) => {
                console.error(error);
                rep.status(500).send('Internal Server Error');
            });
    }
);

// // TODO: Implement the following routes
// // GET /api/recipes/<ID>/steps - get step of a recipe
// router.get('/:id/steps', );

// // POST /api/recipes/<ID>/steps - Add step to a recipe
// router.post('/:id/steps',);

// // GET /api/recipes/<RECIPE_ID>/steps/<STEP_ID> - Get a step of a recipe
// router.get('/:id/steps/:stepId',);

// // PUT /api/recipes/<RECIPE_ID>/steps/<STEP_ID> - Update step of a recipe 
// router.put('/:id/steps/:stepId',);

// // DELETE /api/recipes/<RECIPE_ID>/steps/<STEP_ID> - Delete step of a recipe 
// router.delete('/:id/steps/:stepId',)


//router.use('/:recipeId/step', recipesRoute);
router.use('/:recipeId/steps', function(req : any, res, next) {
    req.rid = req.params.recipeId;
    next()
  }, recipesRoute);

export default router;