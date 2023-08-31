const { Schema, model } = require("mongoose");
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    passwword: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["pending", "approve", "block", "decline"],
      default: "pending",
    },
  },
  { timestamps: true }
);
const user = model("user", userSchema);

module.exports = { user };
