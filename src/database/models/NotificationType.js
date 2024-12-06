const notificationTypeSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      unique: true
    },
    description: {
      type: String
    },
    created_at: {
      type: Date,
      default: Date.now
    },
    updated_at: {
      type: Date,
      default: Date.now
    }
  });
  
  const NotificationType = mongoose.model('NotificationType', notificationTypeSchema);
  
  module.exports = NotificationType;
  