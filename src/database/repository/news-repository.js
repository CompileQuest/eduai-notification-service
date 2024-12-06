const mongoose = require('mongoose');
const newsSchema = require('../src/database/models/schemas/NewsSchema');

const NewsNotification = mongoose.model('NewsNotification', new mongoose.Schema({ newsSchema }));

class NewsRepository {
    async AddNewsNotification(notificationDetails) {
        const notification = new NewsNotification(notificationDetails);
        return await notification.save();
    }

    async FetchAllNewsNotifications() {
        return await NewsNotification.find({});
    }

    async UpdateNewsNotification(updates) {
        return await NewsNotification.updateOne({}, updates);
    }

    async DeleteNewsNotification(id) {
        return await NewsNotification.findByIdAndDelete(id);
    }
}

module.exports = NewsRepository;
