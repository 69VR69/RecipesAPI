// @ts-nocheck
import Joi from 'joi';
import { StepIngredientCreateWithoutIngredientRelationInputSchemaObject } from './StepIngredientCreateWithoutIngredientRelationInput.schema.js';
import { StepIngredientUncheckedCreateWithoutIngredientRelationInputSchemaObject } from './StepIngredientUncheckedCreateWithoutIngredientRelationInput.schema.js';
import { StepIngredientCreateOrConnectWithoutIngredientRelationInputSchemaObject } from './StepIngredientCreateOrConnectWithoutIngredientRelationInput.schema.js';
import { StepIngredientUpsertWithWhereUniqueWithoutIngredientRelationInputSchemaObject } from './StepIngredientUpsertWithWhereUniqueWithoutIngredientRelationInput.schema.js';
import { StepIngredientWhereUniqueInputSchemaObject } from './StepIngredientWhereUniqueInput.schema.js';
import { StepIngredientUpdateWithWhereUniqueWithoutIngredientRelationInputSchemaObject } from './StepIngredientUpdateWithWhereUniqueWithoutIngredientRelationInput.schema.js';
import { StepIngredientUpdateManyWithWhereWithoutIngredientRelationInputSchemaObject } from './StepIngredientUpdateManyWithWhereWithoutIngredientRelationInput.schema.js';
import { StepIngredientScalarWhereInputSchemaObject } from './StepIngredientScalarWhereInput.schema.js'

export const StepIngredientUpdateManyWithoutIngredientRelationNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(StepIngredientCreateWithoutIngredientRelationInputSchemaObject),
Joi.array().items(Joi.object().keys(StepIngredientCreateWithoutIngredientRelationInputSchemaObject)),
Joi.object().keys(StepIngredientUncheckedCreateWithoutIngredientRelationInputSchemaObject),
Joi.array().items(Joi.object().keys(StepIngredientUncheckedCreateWithoutIngredientRelationInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(StepIngredientCreateOrConnectWithoutIngredientRelationInputSchemaObject),
Joi.array().items(Joi.object().keys(StepIngredientCreateOrConnectWithoutIngredientRelationInputSchemaObject))),
  upsert: Joi.alternatives().try(Joi.object().keys(StepIngredientUpsertWithWhereUniqueWithoutIngredientRelationInputSchemaObject),
Joi.array().items(Joi.object().keys(StepIngredientUpsertWithWhereUniqueWithoutIngredientRelationInputSchemaObject))),
  set: Joi.alternatives().try(Joi.object().keys(StepIngredientWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(StepIngredientWhereUniqueInputSchemaObject))),
  disconnect: Joi.alternatives().try(Joi.object().keys(StepIngredientWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(StepIngredientWhereUniqueInputSchemaObject))),
  delete: Joi.alternatives().try(Joi.object().keys(StepIngredientWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(StepIngredientWhereUniqueInputSchemaObject))),
  connect: Joi.alternatives().try(Joi.object().keys(StepIngredientWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(StepIngredientWhereUniqueInputSchemaObject))),
  update: Joi.alternatives().try(Joi.object().keys(StepIngredientUpdateWithWhereUniqueWithoutIngredientRelationInputSchemaObject),
Joi.array().items(Joi.object().keys(StepIngredientUpdateWithWhereUniqueWithoutIngredientRelationInputSchemaObject))),
  updateMany: Joi.alternatives().try(Joi.object().keys(StepIngredientUpdateManyWithWhereWithoutIngredientRelationInputSchemaObject),
Joi.array().items(Joi.object().keys(StepIngredientUpdateManyWithWhereWithoutIngredientRelationInputSchemaObject))),
  deleteMany: Joi.alternatives().try(Joi.object().keys(StepIngredientScalarWhereInputSchemaObject),
Joi.array().items(Joi.object().keys(StepIngredientScalarWhereInputSchemaObject)))
}