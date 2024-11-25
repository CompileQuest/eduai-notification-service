const mongoose = require('mongoose');

const coursesSchema = new mongoose.Schema({
  updates_from_classes: { type: Boolean, required: true, default: true },
  updates_from_teacher_discussions: { type: Boolean, required: true, default: true },
  personalized_class_recommendations: { type: Boolean, required: true, default: true },
}, { _id: false });

module.exports = coursesSchema;
