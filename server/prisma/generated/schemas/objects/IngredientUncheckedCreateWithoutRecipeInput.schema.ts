// @ts-nocheck
import Joi from 'joi';
import { StepIngredientUncheckedCreateNestedManyWithoutIngredientRelationInputSchemaObject } from './StepIngredientUncheckedCreateNestedManyWithoutIngredientRelationInput.schema'

export const IngredientUncheckedCreateWithoutRecipeInputSchemaObject = {
    id: Joi.number(),
  name: Joi.string().required(),
  category: Joi.string().required(),
  season: Joi.number().required(),
  step: Joi.object().keys(StepIngredientUncheckedCreateNestedManyWithoutIngredientRelationInputSchemaObject)
}