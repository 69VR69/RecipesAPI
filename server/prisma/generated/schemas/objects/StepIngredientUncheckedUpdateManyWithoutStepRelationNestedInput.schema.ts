// @ts-nocheck
import Joi from 'joi';
import { StepIngredientCreateWithoutStepRelationInputSchemaObject } from './StepIngredientCreateWithoutStepRelationInput.schema.js';
import { StepIngredientUncheckedCreateWithoutStepRelationInputSchemaObject } from './StepIngredientUncheckedCreateWithoutStepRelationInput.schema.js';
import { StepIngredientCreateOrConnectWithoutStepRelationInputSchemaObject } from './StepIngredientCreateOrConnectWithoutStepRelationInput.schema.js';
import { StepIngredientUpsertWithWhereUniqueWithoutStepRelationInputSchemaObject } from './StepIngredientUpsertWithWhereUniqueWithoutStepRelationInput.schema.js';
import { StepIngredientWhereUniqueInputSchemaObject } from './StepIngredientWhereUniqueInput.schema.js';
import { StepIngredientUpdateWithWhereUniqueWithoutStepRelationInputSchemaObject } from './StepIngredientUpdateWithWhereUniqueWithoutStepRelationInput.schema.js';
import { StepIngredientUpdateManyWithWhereWithoutStepRelationInputSchemaObject } from './StepIngredientUpdateManyWithWhereWithoutStepRelationInput.schema.js';
import { StepIngredientScalarWhereInputSchemaObject } from './StepIngredientScalarWhereInput.schema.js'

export const StepIngredientUncheckedUpdateManyWithoutStepRelationNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(StepIngredientCreateWithoutStepRelationInputSchemaObject),
Joi.array().items(Joi.object().keys(StepIngredientCreateWithoutStepRelationInputSchemaObject)),
Joi.object().keys(StepIngredientUncheckedCreateWithoutStepRelationInputSchemaObject),
Joi.array().items(Joi.object().keys(StepIngredientUncheckedCreateWithoutStepRelationInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(StepIngredientCreateOrConnectWithoutStepRelationInputSchemaObject),
Joi.array().items(Joi.object().keys(StepIngredientCreateOrConnectWithoutStepRelationInputSchemaObject))),
  upsert: Joi.alternatives().try(Joi.object().keys(StepIngredientUpsertWithWhereUniqueWithoutStepRelationInputSchemaObject),
Joi.array().items(Joi.object().keys(StepIngredientUpsertWithWhereUniqueWithoutStepRelationInputSchemaObject))),
  set: Joi.alternatives().try(Joi.object().keys(StepIngredientWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(StepIngredientWhereUniqueInputSchemaObject))),
  disconnect: Joi.alternatives().try(Joi.object().keys(StepIngredientWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(StepIngredientWhereUniqueInputSchemaObject))),
  delete: Joi.alternatives().try(Joi.object().keys(StepIngredientWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(StepIngredientWhereUniqueInputSchemaObject))),
  connect: Joi.alternatives().try(Joi.object().keys(StepIngredientWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(StepIngredientWhereUniqueInputSchemaObject))),
  update: Joi.alternatives().try(Joi.object().keys(StepIngredientUpdateWithWhereUniqueWithoutStepRelationInputSchemaObject),
Joi.array().items(Joi.object().keys(StepIngredientUpdateWithWhereUniqueWithoutStepRelationInputSchemaObject))),
  updateMany: Joi.alternatives().try(Joi.object().keys(StepIngredientUpdateManyWithWhereWithoutStepRelationInputSchemaObject),
Joi.array().items(Joi.object().keys(StepIngredientUpdateManyWithWhereWithoutStepRelationInputSchemaObject))),
  deleteMany: Joi.alternatives().try(Joi.object().keys(StepIngredientScalarWhereInputSchemaObject),
Joi.array().items(Joi.object().keys(StepIngredientScalarWhereInputSchemaObject)))
}