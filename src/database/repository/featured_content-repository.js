const mongoose = require('mongoose');
const featuredContentSchema = require('../database/models/schemas/FeaturedContentSchema');

const FeatureContentNotification = mongoose.model('FeatureContentNotification', new mongoose.Schema({ featuredContentSchema }));

class FeatureContentRepository {
    async AddFeatureContentNotification(notificationDetails) {
        const notification = new FeatureContentNotification(notificationDetails);
        return await notification.save();
    }

    async FetchAllFeatureContentNotifications() {
        return await FeatureContentNotification.find({});
    }

    async UpdateFeatureContentNotification(updates) {
        return await FeatureContentNotification.updateOne({}, updates);
    }

    async DeleteFeatureContentNotification(id) {
        return await FeatureContentNotification.findByIdAndDelete(id);
    }
}

module.exports = FeatureContentRepository;
