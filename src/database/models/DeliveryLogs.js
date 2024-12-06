const deliveryLogSchema = new mongoose.Schema({
    notification_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Notification',
      required: true
    },
    delivery_method: {
      type: String,
      enum: ['email', 'sms', 'push', 'in_app'],
      required: true
    },
    error_messages: {
      type: String
    },
    attempted_at: {
      type: Date,
      default: Date.now
    }
  });
  
  const DeliveryLog = mongoose.model('DeliveryLog', deliveryLogSchema);
  
  module.exports = DeliveryLog;
  