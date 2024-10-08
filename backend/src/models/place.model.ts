import mongoose, { Document, Schema, Types } from "mongoose";

interface ILocation {
  lat: number;
  lng: number;
}

interface IPlace extends Document {
  title: string;
  description: string;
  image: string;
  address: string;
  location: {
    location: ILocation;
  };
  creator: Types.ObjectId;
}

const placeSchema = new Schema<IPlace>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  address: { type: String, required: true },
  location: {
    location: {
      lat: { type: Number, required: true },
      lng: { type: Number, required: true },
    },
  },
  creator: { type: Schema.Types.ObjectId, required: true, ref: "User" },
});

export const Place = mongoose.model<IPlace>("Place", placeSchema);
