// @ts-nocheck
import Joi from 'joi';


export const RecipeIngredientIngredientRecipeCompoundUniqueInputSchemaObject = {
    ingredient: Joi.number().required(),
  recipe: Joi.number().required()
}