const ProductUpdatesService = require('../../services/ProductUpdate-service');

module.exports = (app) => {
    const service = new ProductUpdatesService();

    // Add a product updates notification preference
    app.post('/notifications/product-updates/add', async (req, res, next) => {
        try {
            const { newsletter } = req.body;
            const preferenceData = { newsletter };
            const result = await service.AddProductUpdateNotification(preferenceData);
            res.status(201).json(result);
        } catch (err) {
            next(err);
        }
    });

    // Get all product updates notification preferences
    app.get('/notifications/product-updates/all', async (req, res, next) => {
        try {
            const preferences = await service.FetchAllProductUpdateNotifications();
            res.status(200).json(preferences);
        } catch (err) {
            next(err);
        }
    });

    // Update product updates notification preferences
    app.put('/notifications/product-updates/update', async (req, res, next) => {
        try {
            const { newsletter } = req.body;
            const updates = { newsletter };
            const result = await service.UpdateProductUpdateNotification(updates);
            res.status(200).json(result);
        } catch (err) {
            next(err);
        }
    });

    // Delete a product updates notification preference
    app.delete('/notifications/product-updates/delete/:id', async (req, res, next) => {
        try {
            const { id } = req.params;
            const result = await service.DeleteProductUpdateNotification(id);
            res.status(200).json({ message: 'Preference deleted', result });
        } catch (err) {
            next(err);
        }
    });
};
