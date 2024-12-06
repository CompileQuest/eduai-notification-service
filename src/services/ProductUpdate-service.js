const ProductUpdatesRepository = require('../database/repository/product_updates-repository');
const { APIError } = require('../utils/app-errors');

class ProductUpdatesService {
    constructor() {
        this.repository = new ProductUpdatesRepository();
    }

    async AddProductUpdateNotification(notificationDetails) {
        return await this.repository.AddProductUpdateNotification(notificationDetails);
    }

    async FetchAllProductUpdateNotifications() {
        return await this.repository.FetchAllProductUpdateNotifications();
    }

    async UpdateProductUpdateNotification(updates) {
        return await this.repository.UpdateProductUpdateNotification(updates);
    }

    async DeleteProductUpdateNotification(id) {
        return await this.repository.DeleteProductUpdateNotification(id);
    }
}

module.exports = ProductUpdatesService;
