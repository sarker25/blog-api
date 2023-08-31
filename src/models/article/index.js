const { Schema, model } = require("mongoose");

const articleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      minLength: [15, "title is short"],
    },
    body: {
      type: String,
      required: true,
    },
    cover: {
      type: String,
      default:
        "https://res.cloudinary.com/dofeaqbgp/image/upload/v1679605354/14_611fa36ee5.jpg",
    },
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },
    authorId: {
      type: Schema.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true }
);
const article = model("article", articleSchema);
module.exports = { article };
