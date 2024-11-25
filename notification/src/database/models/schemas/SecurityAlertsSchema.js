const mongoose = require('mongoose');

const securityAlertsSchema = new mongoose.Schema({
  email_unusual_activity: { type: Boolean, required: true, default: true },
  email_new_browser_signin: { type: Boolean, required: true, default: true },
}, { _id: false });

module.exports = securityAlertsSchema;
