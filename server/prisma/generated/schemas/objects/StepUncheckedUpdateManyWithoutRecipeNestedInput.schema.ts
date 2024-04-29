// @ts-nocheck
import Joi from 'joi';
import { StepCreateWithoutRecipeInputSchemaObject } from './StepCreateWithoutRecipeInput.schema.js';
import { StepUncheckedCreateWithoutRecipeInputSchemaObject } from './StepUncheckedCreateWithoutRecipeInput.schema.js';
import { StepCreateOrConnectWithoutRecipeInputSchemaObject } from './StepCreateOrConnectWithoutRecipeInput.schema.js';
import { StepUpsertWithWhereUniqueWithoutRecipeInputSchemaObject } from './StepUpsertWithWhereUniqueWithoutRecipeInput.schema.js';
import { StepWhereUniqueInputSchemaObject } from './StepWhereUniqueInput.schema.js';
import { StepUpdateWithWhereUniqueWithoutRecipeInputSchemaObject } from './StepUpdateWithWhereUniqueWithoutRecipeInput.schema.js';
import { StepUpdateManyWithWhereWithoutRecipeInputSchemaObject } from './StepUpdateManyWithWhereWithoutRecipeInput.schema.js';
import { StepScalarWhereInputSchemaObject } from './StepScalarWhereInput.schema.js'

export const StepUncheckedUpdateManyWithoutRecipeNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(StepCreateWithoutRecipeInputSchemaObject),
Joi.array().items(Joi.object().keys(StepCreateWithoutRecipeInputSchemaObject)),
Joi.object().keys(StepUncheckedCreateWithoutRecipeInputSchemaObject),
Joi.array().items(Joi.object().keys(StepUncheckedCreateWithoutRecipeInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(StepCreateOrConnectWithoutRecipeInputSchemaObject),
Joi.array().items(Joi.object().keys(StepCreateOrConnectWithoutRecipeInputSchemaObject))),
  upsert: Joi.alternatives().try(Joi.object().keys(StepUpsertWithWhereUniqueWithoutRecipeInputSchemaObject),
Joi.array().items(Joi.object().keys(StepUpsertWithWhereUniqueWithoutRecipeInputSchemaObject))),
  set: Joi.alternatives().try(Joi.object().keys(StepWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(StepWhereUniqueInputSchemaObject))),
  disconnect: Joi.alternatives().try(Joi.object().keys(StepWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(StepWhereUniqueInputSchemaObject))),
  delete: Joi.alternatives().try(Joi.object().keys(StepWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(StepWhereUniqueInputSchemaObject))),
  connect: Joi.alternatives().try(Joi.object().keys(StepWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(StepWhereUniqueInputSchemaObject))),
  update: Joi.alternatives().try(Joi.object().keys(StepUpdateWithWhereUniqueWithoutRecipeInputSchemaObject),
Joi.array().items(Joi.object().keys(StepUpdateWithWhereUniqueWithoutRecipeInputSchemaObject))),
  updateMany: Joi.alternatives().try(Joi.object().keys(StepUpdateManyWithWhereWithoutRecipeInputSchemaObject),
Joi.array().items(Joi.object().keys(StepUpdateManyWithWhereWithoutRecipeInputSchemaObject))),
  deleteMany: Joi.alternatives().try(Joi.object().keys(StepScalarWhereInputSchemaObject),
Joi.array().items(Joi.object().keys(StepScalarWhereInputSchemaObject)))
}