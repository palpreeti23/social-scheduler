import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    zernioProfileId: { type: String },
  },
  { timestamps: true },
);

const userModel = mongoose.model("user", userSchema);

export default userModel;
