const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: false,
    },
    article: {
      type: String,
      required: false,
    },
    authorname: {
      type: String,
      required: false,
    },
    articleImage: {
      type: String,
      required: false,
    },
    category: {
      type: String,
      required: false,
    },
  },
  {timestamps : true
  }
);

// collection creation
const BlogPost = mongoose.model("BLOG", userSchema);
module.exports = BlogPost;
