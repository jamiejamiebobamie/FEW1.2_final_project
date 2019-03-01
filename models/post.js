// models/post.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Populate = require("../utils/autopopulate");

const PostSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: false },
  summary: { type: String, required: true },
  subreddit: { type: String, required: true },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  author : { type: Schema.Types.ObjectId, ref: "User", required: true },
  upVotes : [{ type: Schema.Types.ObjectId, ref: "User"}],
  downVotes : [{ type: Schema.Types.ObjectId, ref: "User"}],
  voteScore : {type: Number}
});

// Always populate the author field
PostSchema
    .pre('findOne', Populate('author'))
    .pre('find', Populate('author'))

module.exports = mongoose.model("Post", PostSchema);

//
// STRETCH CHALLENGE!!
// We only allow voting on the home and subreddit screens currently. Allow it on when viewing a single post.
// Turn the Vote Up/Vote Down buttons into arrows using CSS and/or JS
// Have the vote buttons color change after they've been clicked, and ensure the change is retained during the session (i.e. if you Vote Up, the button should be colored red and should stay that way until the vote changes).
