const mongoose = require('mongoose');

const eventsAndOffersSchema = new mongoose.Schema({
  email_promos_events: { type: Boolean, required: true, default: true },
}, { _id: false });

module.exports = eventsAndOffersSchema;
