// @ts-nocheck
import Joi from 'joi';


export const RecipeUncheckedCreateWithoutIngredientInputSchemaObject = {
    id: Joi.number(),
  name: Joi.string().required()
}