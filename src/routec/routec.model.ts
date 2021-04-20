import * as mongoose from 'mongoose';

export const RouteSchema = new mongoose.Schema({
    speciality: { type: Number, required: true }
});

export interface Routec extends mongoose.Document {
    id: string;
    speciality:number;
  }