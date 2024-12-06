const FeatureContentRepository = require('../database/repository/featured_content-repository');
const { APIError } = require('../utils/app-errors');

class FeatureContentService {
    constructor() {
        this.repository = new FeatureContentRepository();
    }

    async AddFeatureContentNotification(notificationDetails) {
        return await this.repository.AddFeatureContentNotification(notificationDetails);
    }

    async FetchAllFeatureContentNotifications() {
        return await this.repository.FetchAllFeatureContentNotifications();
    }

    async UpdateFeatureContentNotification(updates) {
        return await this.repository.UpdateFeatureContentNotification(updates);
    }

    async DeleteFeatureContentNotification(id) {
        return await this.repository.DeleteFeatureContentNotification(id);
    }
}

module.exports = FeatureContentService;
