const mongoose = require('mongoose');
const securityAlertsSchema = require('./schemas/SecurityAlertsSchema');
const newsSchema = require('./schemas/NewsSchema');
const coursesSchema = require('./schemas/CoursesSchema');
const featuredContentSchema = require('./schemas/FeaturedContentSchema');
const productUpdatesSchema = require('./schemas/ProductUpdatesSchema');
const eventsAndOffersSchema = require('./schemas/EventsAndOffersSchema');

const notificationSettingsSchema = new mongoose.Schema({
  notification_settings_id: { type: mongoose.Schema.Types.UUID, required: true, unique: true },
  user_id: { type: mongoose.Schema.Types.UUID, required: true, ref: 'User' },
  enabled: { type: Boolean, required: true, default: true },
  security_alerts: { type: securityAlertsSchema, required: true },
  news: { type: newsSchema, required: true },
  courses: { type: coursesSchema, required: true },
  featured_content: { type: featuredContentSchema, required: true },
  product_updates: { type: productUpdatesSchema, required: true },
  events_and_offers: { type: eventsAndOffersSchema, required: true },
  unsubscribe_all: { type: Boolean, required: true, default: false },
});

const NotificationSettings = mongoose.model('NotificationSettings', notificationSettingsSchema);

module.exports = NotificationSettings;
