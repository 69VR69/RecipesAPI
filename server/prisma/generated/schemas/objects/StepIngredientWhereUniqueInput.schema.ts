// @ts-nocheck
import Joi from 'joi';
import { StepIngredientIngredientStepCompoundUniqueInputSchemaObject } from './StepIngredientIngredientStepCompoundUniqueInput.schema'

export const StepIngredientWhereUniqueInputSchemaObject = {
    ingredient_step: Joi.object().keys(StepIngredientIngredientStepCompoundUniqueInputSchemaObject)
}