// @ts-nocheck
import Joi from 'joi';


export const IngredientCreateWithoutRecipeInputSchemaObject = {
    name: Joi.string().required(),
  category: Joi.string().required(),
  season: Joi.number().required()
}