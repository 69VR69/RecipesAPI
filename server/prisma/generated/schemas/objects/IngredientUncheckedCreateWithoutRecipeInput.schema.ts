// @ts-nocheck
import Joi from 'joi';


export const IngredientUncheckedCreateWithoutRecipeInputSchemaObject = {
    id: Joi.number(),
  name: Joi.string().required(),
  category: Joi.string().required(),
  season: Joi.number().required()
}