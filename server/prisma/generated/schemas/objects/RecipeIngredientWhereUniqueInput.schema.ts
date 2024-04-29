// @ts-nocheck
import Joi from 'joi';
import { RecipeIngredientIngredientRecipeCompoundUniqueInputSchemaObject } from './RecipeIngredientIngredientRecipeCompoundUniqueInput.schema.js'

export const RecipeIngredientWhereUniqueInputSchemaObject = {
    ingredient_recipe: Joi.object().keys(RecipeIngredientIngredientRecipeCompoundUniqueInputSchemaObject)
}