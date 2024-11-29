const mongoose = require('mongoose');
const productUpdatesSchema = require('../database/models/schemas/ProductUpdatesSchema');

const ProductUpdateNotification = mongoose.model('ProductUpdateNotification', new mongoose.Schema({ productUpdatesSchema }));

class ProductUpdatesRepository {
    async AddProductUpdateNotification(notificationDetails) {
        const notification = new ProductUpdateNotification(notificationDetails);
        return await notification.save();
    }

    async FetchAllProductUpdateNotifications() {
        return await ProductUpdateNotification.find({});
    }

    async UpdateProductUpdateNotification(updates) {
        return await ProductUpdateNotification.updateOne({}, updates);
    }

    async DeleteProductUpdateNotification(id) {
        return await ProductUpdateNotification.findByIdAndDelete(id);
    }
}

module.exports = ProductUpdatesRepository;
