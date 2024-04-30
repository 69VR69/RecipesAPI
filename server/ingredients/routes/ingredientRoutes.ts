import express from 'express';
import { IngredientService } from '../services/ingredientService.js';
import { IngredientIdValidator, IngredientValidator } from './ingredientValidator.js';
import { IngredientsWithoutId } from '../types.js';

const router = express.Router();
const ingredientService = new IngredientService();

// GET /api/ingredients - Get all ingredients
router.get('/', (req, rep) =>
{
    // Validate the request
    if (req.query.recipeId && isNaN(parseInt(req.query.recipeId as string)))
    {
        return rep.status(400).json({ error: 'Invalid recipeId' });
    }
    // Call the service
    ingredientService.getIngredients(req, rep)
    .then((ingredients) => rep.status(200).json(ingredients))
    .catch((error) => rep.status(500).json({ error: error.message }));
});

//GET /api/ingredients/1 - get an ingredient by id 
router.get('/:id', (req, rep) =>
{
    const { id } = req.params;
    // Validate the Id
    if(IngredientIdValidator.validate(id))
    {
        return rep.status(400).json({ error: 'Invalid ingredient id' });
    }

    const ingredientId = parseInt(id);

    // Call the service
    ingredientService.getIngredient(ingredientId, rep)
    .then((ingredient) => rep.status(200).json(ingredient))
    .catch((error) => rep.status(500).json({ error: error.message }));
});

// POST /api/ingredient - Create a new ingredients
router.post('/', (req, rep) =>
{
    // Validate the request
    if(IngredientValidator.validate(req.body))
    {
        return rep.status(400).json({ error: 'Invalid ingredient' });
    }

    // Transform the body to IngredientsWithoutId
    const ingredient = req.body as IngredientsWithoutId;

    // Call the service
    ingredientService.createIngredient(ingredient, rep)
});

//PUT /api/ingredients/1 - Update an ingredient 
router.put('/:id', (req, rep) =>
{
    const { id } = req.params;
    // Validate the Id
    if(IngredientIdValidator.validate(id))
    {
        return rep.status(400).json({ error: 'Invalid ingredient id' });
    }

    // Validate the request
    if(IngredientValidator.validate(req.body))
    {
        return rep.status(400).json({ error: 'Invalid ingredient' });
    }

    // Transform the body to Ingredients
    const ingredientId = parseInt(id);
    const ingredient = req.body as IngredientsWithoutId;

    // Call the service
    ingredientService.updateIngredient(ingredientId, ingredient, rep)

});

//DELETE /api/ingredients/1 - Delete an ingredient 
router.delete('/:id', (req, rep) =>
{
    const { id } = req.params;
    // Validate the Id
    if(IngredientIdValidator.validate(id))
    {
        return rep.status(400).json({ error: 'Invalid ingredient id' });
    }

    const ingredientId = parseInt(id);

    // Call the service
    ingredientService.deleteIngredient(ingredientId, rep)
    .then(() => rep.status(204).json({ msg: 'Successfully deleted ingredient ' + id }))
    .catch((error) => rep.status(500).json({ error: error.message }));
}) 




export default router;