// @ts-nocheck
import Joi from 'joi';


export const RecipeIngredientUncheckedCreateInputSchemaObject = {
    ingredient: Joi.number().required(),
  recipe: Joi.number().required(),
  number: Joi.number().required()
}