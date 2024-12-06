const mongoose = require('mongoose');
const eventsAndOffersSchema = require('../database/models/schemas/EventsAndOffersSchema');

const EventsAndOffersNotification = mongoose.model('EventsAndOffersNotification', new mongoose.Schema({ eventsAndOffersSchema }));

class EventsAndOffersRepository {
    async AddEventsAndOffersNotification(notificationDetails) {
        const notification = new EventsAndOffersNotification(notificationDetails);
        return await notification.save();
    }

    async FetchAllEventsAndOffersNotifications() {
        return await EventsAndOffersNotification.find({});
    }

    async UpdateEventsAndOffersNotification(updates) {
        return await EventsAndOffersNotification.updateOne({}, updates);
    }

    async DeleteEventsAndOffersNotification(id) {
        return await EventsAndOffersNotification.findByIdAndDelete(id);
    }
}

module.exports = EventsAndOffersRepository;
