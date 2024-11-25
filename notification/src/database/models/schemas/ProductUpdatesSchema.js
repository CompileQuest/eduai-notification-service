const mongoose = require('mongoose');

const productUpdatesSchema = new mongoose.Schema({
  newsletter: { type: Boolean, required: true, default: true },
}, { _id: false });

module.exports = productUpdatesSchema;
