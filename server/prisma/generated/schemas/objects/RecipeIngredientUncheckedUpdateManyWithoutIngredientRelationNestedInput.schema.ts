// @ts-nocheck
import Joi from 'joi';
import { RecipeIngredientCreateWithoutIngredientRelationInputSchemaObject } from './RecipeIngredientCreateWithoutIngredientRelationInput.schema.js.js';
import { RecipeIngredientUncheckedCreateWithoutIngredientRelationInputSchemaObject } from './RecipeIngredientUncheckedCreateWithoutIngredientRelationInput.schema.js.js';
import { RecipeIngredientCreateOrConnectWithoutIngredientRelationInputSchemaObject } from './RecipeIngredientCreateOrConnectWithoutIngredientRelationInput.schema.js.js';
import { RecipeIngredientUpsertWithWhereUniqueWithoutIngredientRelationInputSchemaObject } from './RecipeIngredientUpsertWithWhereUniqueWithoutIngredientRelationInput.schema.js.js';
import { RecipeIngredientWhereUniqueInputSchemaObject } from './RecipeIngredientWhereUniqueInput.schema.js.js';
import { RecipeIngredientUpdateWithWhereUniqueWithoutIngredientRelationInputSchemaObject } from './RecipeIngredientUpdateWithWhereUniqueWithoutIngredientRelationInput.schema.js.js';
import { RecipeIngredientUpdateManyWithWhereWithoutIngredientRelationInputSchemaObject } from './RecipeIngredientUpdateManyWithWhereWithoutIngredientRelationInput.schema.js.js';
import { RecipeIngredientScalarWhereInputSchemaObject } from './RecipeIngredientScalarWhereInput.schema.js.js'

export const RecipeIngredientUncheckedUpdateManyWithoutIngredientRelationNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(RecipeIngredientCreateWithoutIngredientRelationInputSchemaObject),
Joi.array().items(Joi.object().keys(RecipeIngredientCreateWithoutIngredientRelationInputSchemaObject)),
Joi.object().keys(RecipeIngredientUncheckedCreateWithoutIngredientRelationInputSchemaObject),
Joi.array().items(Joi.object().keys(RecipeIngredientUncheckedCreateWithoutIngredientRelationInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(RecipeIngredientCreateOrConnectWithoutIngredientRelationInputSchemaObject),
Joi.array().items(Joi.object().keys(RecipeIngredientCreateOrConnectWithoutIngredientRelationInputSchemaObject))),
  upsert: Joi.alternatives().try(Joi.object().keys(RecipeIngredientUpsertWithWhereUniqueWithoutIngredientRelationInputSchemaObject),
Joi.array().items(Joi.object().keys(RecipeIngredientUpsertWithWhereUniqueWithoutIngredientRelationInputSchemaObject))),
  set: Joi.alternatives().try(Joi.object().keys(RecipeIngredientWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(RecipeIngredientWhereUniqueInputSchemaObject))),
  disconnect: Joi.alternatives().try(Joi.object().keys(RecipeIngredientWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(RecipeIngredientWhereUniqueInputSchemaObject))),
  delete: Joi.alternatives().try(Joi.object().keys(RecipeIngredientWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(RecipeIngredientWhereUniqueInputSchemaObject))),
  connect: Joi.alternatives().try(Joi.object().keys(RecipeIngredientWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(RecipeIngredientWhereUniqueInputSchemaObject))),
  update: Joi.alternatives().try(Joi.object().keys(RecipeIngredientUpdateWithWhereUniqueWithoutIngredientRelationInputSchemaObject),
Joi.array().items(Joi.object().keys(RecipeIngredientUpdateWithWhereUniqueWithoutIngredientRelationInputSchemaObject))),
  updateMany: Joi.alternatives().try(Joi.object().keys(RecipeIngredientUpdateManyWithWhereWithoutIngredientRelationInputSchemaObject),
Joi.array().items(Joi.object().keys(RecipeIngredientUpdateManyWithWhereWithoutIngredientRelationInputSchemaObject))),
  deleteMany: Joi.alternatives().try(Joi.object().keys(RecipeIngredientScalarWhereInputSchemaObject),
Joi.array().items(Joi.object().keys(RecipeIngredientScalarWhereInputSchemaObject)))
}