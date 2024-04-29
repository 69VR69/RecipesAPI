// @ts-nocheck
import Joi from 'joi';
import { RecipeIngredientCreateWithoutReciepRelationInputSchemaObject } from './RecipeIngredientCreateWithoutReciepRelationInput.schema.js';
import { RecipeIngredientUncheckedCreateWithoutReciepRelationInputSchemaObject } from './RecipeIngredientUncheckedCreateWithoutReciepRelationInput.schema.js';
import { RecipeIngredientCreateOrConnectWithoutReciepRelationInputSchemaObject } from './RecipeIngredientCreateOrConnectWithoutReciepRelationInput.schema.js';
import { RecipeIngredientWhereUniqueInputSchemaObject } from './RecipeIngredientWhereUniqueInput.schema.js'

export const RecipeIngredientCreateNestedManyWithoutReciepRelationInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(RecipeIngredientCreateWithoutReciepRelationInputSchemaObject),
Joi.array().items(Joi.object().keys(RecipeIngredientCreateWithoutReciepRelationInputSchemaObject)),
Joi.object().keys(RecipeIngredientUncheckedCreateWithoutReciepRelationInputSchemaObject),
Joi.array().items(Joi.object().keys(RecipeIngredientUncheckedCreateWithoutReciepRelationInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(RecipeIngredientCreateOrConnectWithoutReciepRelationInputSchemaObject),
Joi.array().items(Joi.object().keys(RecipeIngredientCreateOrConnectWithoutReciepRelationInputSchemaObject))),
  connect: Joi.alternatives().try(Joi.object().keys(RecipeIngredientWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(RecipeIngredientWhereUniqueInputSchemaObject)))
}