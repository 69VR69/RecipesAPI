// @ts-nocheck
import Joi from 'joi';
import { RecipeIngredientCreateWithoutIngredientRelationInputSchemaObject } from './RecipeIngredientCreateWithoutIngredientRelationInput.schema.js';
import { RecipeIngredientUncheckedCreateWithoutIngredientRelationInputSchemaObject } from './RecipeIngredientUncheckedCreateWithoutIngredientRelationInput.schema.js';
import { RecipeIngredientCreateOrConnectWithoutIngredientRelationInputSchemaObject } from './RecipeIngredientCreateOrConnectWithoutIngredientRelationInput.schema.js';
import { RecipeIngredientWhereUniqueInputSchemaObject } from './RecipeIngredientWhereUniqueInput.schema.js'

export const RecipeIngredientCreateNestedManyWithoutIngredientRelationInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(RecipeIngredientCreateWithoutIngredientRelationInputSchemaObject),
Joi.array().items(Joi.object().keys(RecipeIngredientCreateWithoutIngredientRelationInputSchemaObject)),
Joi.object().keys(RecipeIngredientUncheckedCreateWithoutIngredientRelationInputSchemaObject),
Joi.array().items(Joi.object().keys(RecipeIngredientUncheckedCreateWithoutIngredientRelationInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(RecipeIngredientCreateOrConnectWithoutIngredientRelationInputSchemaObject),
Joi.array().items(Joi.object().keys(RecipeIngredientCreateOrConnectWithoutIngredientRelationInputSchemaObject))),
  connect: Joi.alternatives().try(Joi.object().keys(RecipeIngredientWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(RecipeIngredientWhereUniqueInputSchemaObject)))
}