import mongoose, { Document, Schema, Types } from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";
interface IUser extends Document {
  id: string;
  name: string;
  email: string;
  password: string;
  image: string;
  places: Types.ObjectId[];
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 5 },
  image: { type: String, required: true },
  places: {
    type: [{ type: Schema.Types.ObjectId, ref: "Place" }],
    default: [],
  },
});

userSchema.plugin(mongooseUniqueValidator);

export const User = mongoose.model<IUser>("User", userSchema);
