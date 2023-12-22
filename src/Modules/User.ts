import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  password: string;
}

const userSchema: Schema<IUser> = new Schema({
  name: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});


const User = mongoose.model<IUser>("User", userSchema);

export default User;
