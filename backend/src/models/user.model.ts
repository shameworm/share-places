import mongoose, { Document, Schema } from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";
interface IUser extends Document {
  id: string;
  name: string;
  email: string;
  password: string;
  image: string;
  places: string;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 5 },
  image: { type: String, required: true },
  places: { type: String, require: true },
});

userSchema.plugin(mongooseUniqueValidator);

const User = mongoose.model<IUser>("User", userSchema);
export default User;
