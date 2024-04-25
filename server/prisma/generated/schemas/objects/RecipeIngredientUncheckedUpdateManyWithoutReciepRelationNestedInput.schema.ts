// @ts-nocheck
import Joi from 'joi';
import { RecipeIngredientCreateWithoutReciepRelationInputSchemaObject } from './RecipeIngredientCreateWithoutReciepRelationInput.schema';
import { RecipeIngredientUncheckedCreateWithoutReciepRelationInputSchemaObject } from './RecipeIngredientUncheckedCreateWithoutReciepRelationInput.schema';
import { RecipeIngredientCreateOrConnectWithoutReciepRelationInputSchemaObject } from './RecipeIngredientCreateOrConnectWithoutReciepRelationInput.schema';
import { RecipeIngredientUpsertWithWhereUniqueWithoutReciepRelationInputSchemaObject } from './RecipeIngredientUpsertWithWhereUniqueWithoutReciepRelationInput.schema';
import { RecipeIngredientWhereUniqueInputSchemaObject } from './RecipeIngredientWhereUniqueInput.schema';
import { RecipeIngredientUpdateWithWhereUniqueWithoutReciepRelationInputSchemaObject } from './RecipeIngredientUpdateWithWhereUniqueWithoutReciepRelationInput.schema';
import { RecipeIngredientUpdateManyWithWhereWithoutReciepRelationInputSchemaObject } from './RecipeIngredientUpdateManyWithWhereWithoutReciepRelationInput.schema';
import { RecipeIngredientScalarWhereInputSchemaObject } from './RecipeIngredientScalarWhereInput.schema'

export const RecipeIngredientUncheckedUpdateManyWithoutReciepRelationNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(RecipeIngredientCreateWithoutReciepRelationInputSchemaObject),
Joi.array().items(Joi.object().keys(RecipeIngredientCreateWithoutReciepRelationInputSchemaObject)),
Joi.object().keys(RecipeIngredientUncheckedCreateWithoutReciepRelationInputSchemaObject),
Joi.array().items(Joi.object().keys(RecipeIngredientUncheckedCreateWithoutReciepRelationInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(RecipeIngredientCreateOrConnectWithoutReciepRelationInputSchemaObject),
Joi.array().items(Joi.object().keys(RecipeIngredientCreateOrConnectWithoutReciepRelationInputSchemaObject))),
  upsert: Joi.alternatives().try(Joi.object().keys(RecipeIngredientUpsertWithWhereUniqueWithoutReciepRelationInputSchemaObject),
Joi.array().items(Joi.object().keys(RecipeIngredientUpsertWithWhereUniqueWithoutReciepRelationInputSchemaObject))),
  set: Joi.alternatives().try(Joi.object().keys(RecipeIngredientWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(RecipeIngredientWhereUniqueInputSchemaObject))),
  disconnect: Joi.alternatives().try(Joi.object().keys(RecipeIngredientWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(RecipeIngredientWhereUniqueInputSchemaObject))),
  delete: Joi.alternatives().try(Joi.object().keys(RecipeIngredientWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(RecipeIngredientWhereUniqueInputSchemaObject))),
  connect: Joi.alternatives().try(Joi.object().keys(RecipeIngredientWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(RecipeIngredientWhereUniqueInputSchemaObject))),
  update: Joi.alternatives().try(Joi.object().keys(RecipeIngredientUpdateWithWhereUniqueWithoutReciepRelationInputSchemaObject),
Joi.array().items(Joi.object().keys(RecipeIngredientUpdateWithWhereUniqueWithoutReciepRelationInputSchemaObject))),
  updateMany: Joi.alternatives().try(Joi.object().keys(RecipeIngredientUpdateManyWithWhereWithoutReciepRelationInputSchemaObject),
Joi.array().items(Joi.object().keys(RecipeIngredientUpdateManyWithWhereWithoutReciepRelationInputSchemaObject))),
  deleteMany: Joi.alternatives().try(Joi.object().keys(RecipeIngredientScalarWhereInputSchemaObject),
Joi.array().items(Joi.object().keys(RecipeIngredientScalarWhereInputSchemaObject)))
}