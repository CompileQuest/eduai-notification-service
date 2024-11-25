const mongoose = require('mongoose');

const featuredContentSchema = new mongoose.Schema({
  email_tips_on_courses: { type: Boolean, required: true, default: true },
}, { _id: false });

module.exports = featuredContentSchema;
