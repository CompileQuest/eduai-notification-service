const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  email_sales_latest_news: { type: Boolean, required: true, default: true },
  email_new_features_updates: { type: Boolean, required: true, default: true },
  email_tips_on_using_account: { type: Boolean, required: true, default: false },
}, { _id: false });

module.exports = newsSchema;
