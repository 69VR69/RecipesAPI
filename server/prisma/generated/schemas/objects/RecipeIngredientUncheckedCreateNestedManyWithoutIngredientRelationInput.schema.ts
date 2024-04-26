// @ts-nocheck
import Joi from 'joi';
import { RecipeIngredientCreateWithoutIngredientRelationInputSchemaObject } from './RecipeIngredientCreateWithoutIngredientRelationInput.schema';
import { RecipeIngredientUncheckedCreateWithoutIngredientRelationInputSchemaObject } from './RecipeIngredientUncheckedCreateWithoutIngredientRelationInput.schema';
import { RecipeIngredientCreateOrConnectWithoutIngredientRelationInputSchemaObject } from './RecipeIngredientCreateOrConnectWithoutIngredientRelationInput.schema';
import { RecipeIngredientWhereUniqueInputSchemaObject } from './RecipeIngredientWhereUniqueInput.schema'

export const RecipeIngredientUncheckedCreateNestedManyWithoutIngredientRelationInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(RecipeIngredientCreateWithoutIngredientRelationInputSchemaObject),
Joi.array().items(Joi.object().keys(RecipeIngredientCreateWithoutIngredientRelationInputSchemaObject)),
Joi.object().keys(RecipeIngredientUncheckedCreateWithoutIngredientRelationInputSchemaObject),
Joi.array().items(Joi.object().keys(RecipeIngredientUncheckedCreateWithoutIngredientRelationInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(RecipeIngredientCreateOrConnectWithoutIngredientRelationInputSchemaObject),
Joi.array().items(Joi.object().keys(RecipeIngredientCreateOrConnectWithoutIngredientRelationInputSchemaObject))),
  connect: Joi.alternatives().try(Joi.object().keys(RecipeIngredientWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(RecipeIngredientWhereUniqueInputSchemaObject)))
}