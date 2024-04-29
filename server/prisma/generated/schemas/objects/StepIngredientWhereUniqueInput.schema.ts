// @ts-nocheck
import Joi from 'joi';
import { StepIngredientIngredientStepCompoundUniqueInputSchemaObject } from './StepIngredientIngredientStepCompoundUniqueInput.schema.js'

export const StepIngredientWhereUniqueInputSchemaObject = {
    ingredient_step: Joi.object().keys(StepIngredientIngredientStepCompoundUniqueInputSchemaObject)
}