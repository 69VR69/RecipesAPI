// @ts-nocheck
import Joi from 'joi';
import { IngredientCreateWithoutSeasonRelationInputSchemaObject } from './IngredientCreateWithoutSeasonRelationInput.schema.js';
import { IngredientUncheckedCreateWithoutSeasonRelationInputSchemaObject } from './IngredientUncheckedCreateWithoutSeasonRelationInput.schema.js';
import { IngredientCreateOrConnectWithoutSeasonRelationInputSchemaObject } from './IngredientCreateOrConnectWithoutSeasonRelationInput.schema.js';
import { IngredientUpsertWithWhereUniqueWithoutSeasonRelationInputSchemaObject } from './IngredientUpsertWithWhereUniqueWithoutSeasonRelationInput.schema.js';
import { IngredientWhereUniqueInputSchemaObject } from './IngredientWhereUniqueInput.schema.js';
import { IngredientUpdateWithWhereUniqueWithoutSeasonRelationInputSchemaObject } from './IngredientUpdateWithWhereUniqueWithoutSeasonRelationInput.schema.js';
import { IngredientUpdateManyWithWhereWithoutSeasonRelationInputSchemaObject } from './IngredientUpdateManyWithWhereWithoutSeasonRelationInput.schema.js';
import { IngredientScalarWhereInputSchemaObject } from './IngredientScalarWhereInput.schema.js'

export const IngredientUpdateManyWithoutSeasonRelationNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(IngredientCreateWithoutSeasonRelationInputSchemaObject),
Joi.array().items(Joi.object().keys(IngredientCreateWithoutSeasonRelationInputSchemaObject)),
Joi.object().keys(IngredientUncheckedCreateWithoutSeasonRelationInputSchemaObject),
Joi.array().items(Joi.object().keys(IngredientUncheckedCreateWithoutSeasonRelationInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(IngredientCreateOrConnectWithoutSeasonRelationInputSchemaObject),
Joi.array().items(Joi.object().keys(IngredientCreateOrConnectWithoutSeasonRelationInputSchemaObject))),
  upsert: Joi.alternatives().try(Joi.object().keys(IngredientUpsertWithWhereUniqueWithoutSeasonRelationInputSchemaObject),
Joi.array().items(Joi.object().keys(IngredientUpsertWithWhereUniqueWithoutSeasonRelationInputSchemaObject))),
  set: Joi.alternatives().try(Joi.object().keys(IngredientWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(IngredientWhereUniqueInputSchemaObject))),
  disconnect: Joi.alternatives().try(Joi.object().keys(IngredientWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(IngredientWhereUniqueInputSchemaObject))),
  delete: Joi.alternatives().try(Joi.object().keys(IngredientWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(IngredientWhereUniqueInputSchemaObject))),
  connect: Joi.alternatives().try(Joi.object().keys(IngredientWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(IngredientWhereUniqueInputSchemaObject))),
  update: Joi.alternatives().try(Joi.object().keys(IngredientUpdateWithWhereUniqueWithoutSeasonRelationInputSchemaObject),
Joi.array().items(Joi.object().keys(IngredientUpdateWithWhereUniqueWithoutSeasonRelationInputSchemaObject))),
  updateMany: Joi.alternatives().try(Joi.object().keys(IngredientUpdateManyWithWhereWithoutSeasonRelationInputSchemaObject),
Joi.array().items(Joi.object().keys(IngredientUpdateManyWithWhereWithoutSeasonRelationInputSchemaObject))),
  deleteMany: Joi.alternatives().try(Joi.object().keys(IngredientScalarWhereInputSchemaObject),
Joi.array().items(Joi.object().keys(IngredientScalarWhereInputSchemaObject)))
}