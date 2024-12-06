const NewsRepository = require('../database/repository/news-repository');
const { APIError } = require('../utils/app-errors');

class NewsService {
    constructor() {
        this.repository = new NewsRepository();
    }

    async AddNewsNotification(notificationDetails) {
        return await this.repository.AddNewsNotification(notificationDetails);
    }

    async FetchAllNewsNotifications() {
        return await this.repository.FetchAllNewsNotifications();
    }

    async UpdateNewsNotification(updates) {
        return await this.repository.UpdateNewsNotification(updates);
    }

    async DeleteNewsNotification(id) {
        return await this.repository.DeleteNewsNotification(id);
    }
}

module.exports = NewsService;
