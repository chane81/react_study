const mongoose = require('mongoose');

const {
  Schema
} = mongoose;

// mongo db 스키마 세팅
const Post = new Schema({
  title: String,
  body: String,
  tags: [String],
  publishedDate: {
    type: Date,
    default: new Date() // 현재 날짜 Default Set
  }
});

module.exports = mongoose.model('Post', Post);