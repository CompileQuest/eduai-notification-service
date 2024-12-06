const EventsAndOffersRepository = require('../database/repository/events_and_offers-repository');
const { APIError } = require('../utils/app-errors');

class EventsAndOffersService {
    constructor() {
        this.repository = new EventsAndOffersRepository();
    }

    async AddEventsAndOffersNotification(notificationDetails) {
        return await this.repository.AddEventsAndOffersNotification(notificationDetails);
    }

    async FetchAllEventsAndOffersNotifications() {
        return await this.repository.FetchAllEventsAndOffersNotifications();
    }

    async UpdateEventsAndOffersNotification(updates) {
        return await this.repository.UpdateEventsAndOffersNotification(updates);
    }

    async DeleteEventsAndOffersNotification(id) {
        return await this.repository.DeleteEventsAndOffersNotification(id);
    }
}

module.exports = EventsAndOffersService;
