import mongoose from 'mongoose';
import getModelName from 'Utils/getModelName';
import { pluralName as tradermarketModelName } from '../tradermark/tradermark.model';

const { Schema } = mongoose;
export const { singularName, pluralName } = getModelName('models');

const schema = new Schema(
  {
    modelName: {
      type: String,
      required: true,
    },
    tradermark:{
      type: Schema.Types.ObjectId,
      ref: tradermarketModelName,
      require: true
    },
    status: {
      type: String,
      enum: ['active', 'inactive', 'deleted'],
      default: 'active',
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false,
  }
);

// Ensure virtual fields are serialised.
schema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform(_doc, ret) {
    // eslint-disable-next-line no-param-reassign,no-underscore-dangle
    delete ret._id;
  },
});

// rename name Example to singular Model
export default mongoose.models[singularName] ||
mongoose.model(pluralName, schema);
