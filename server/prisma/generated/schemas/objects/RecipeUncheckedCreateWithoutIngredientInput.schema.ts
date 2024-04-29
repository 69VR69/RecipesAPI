// @ts-nocheck
import Joi from 'joi';
import { StepUncheckedCreateNestedManyWithoutRecipeInputSchemaObject } from './StepUncheckedCreateNestedManyWithoutRecipeInput.schema'

export const RecipeUncheckedCreateWithoutIngredientInputSchemaObject = {
    id: Joi.number(),
  name: Joi.string().required(),
  step: Joi.object().keys(StepUncheckedCreateNestedManyWithoutRecipeInputSchemaObject)
}