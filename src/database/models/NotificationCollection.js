const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.UUID,
    required: true,
    ref: 'User'
  },
  type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'NotificationType',
    required: true
  },
  content: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'sent', 'failed'],
    required: true,
    default: 'pending'
  },
  sent_at: {
    type: Date
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;


/*
This collection stores notifications with 
fields that include the userId, 
type, content, status, and timestamps.

*/