const { Schema, model } = require("mongoose");
const commentSchema = new Schema(
  {
    body: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["public", "private"],
      default: "public",
    },
    authorId: {
      type: Schema.ObjectId,
      ref: "user",
    },
    articleId: {
      type: Schema.ObjectId,
      ref: "article",
    },
  },
  { timestamps: true }
);

const comment = model("comment", commentSchema);
module.exports = { comment };
