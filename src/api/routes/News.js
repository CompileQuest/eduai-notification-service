const NewsService = require('../../services/News-service');

module.exports = (app) => {
    const service = new NewsService();

    // Add a news notification preference
    app.post('/notifications/news/add', async (req, res, next) => {
        try {
            const { email_sales_latest_news, email_new_features_updates, email_tips_on_using_account } = req.body;
            const preferenceData = { email_sales_latest_news, email_new_features_updates, email_tips_on_using_account };
            const result = await service.AddNewsNotification(preferenceData);
            res.status(201).json(result);
        } catch (err) {
            next(err);
        }
    });

    // Get all news notification preferences
    app.get('/notifications/news/all', async (req, res, next) => {
        try {
            const preferences = await service.FetchAllNewsNotifications();
            res.status(200).json(preferences);
        } catch (err) {
            next(err);
        }
    });

    // Update news notification preferences
    app.put('/notifications/news/update', async (req, res, next) => {
        try {
            const { email_sales_latest_news, email_new_features_updates, email_tips_on_using_account } = req.body;
            const updates = { email_sales_latest_news, email_new_features_updates, email_tips_on_using_account };
            const result = await service.UpdateNewsNotification(updates);
            res.status(200).json(result);
        } catch (err) {
            next(err);
        }
    });

    // Delete a news notification preference
    app.delete('/notifications/news/delete/:id', async (req, res, next) => {
        try {
            const { id } = req.params;
            const result = await service.DeleteNewsNotification(id);
            res.status(200).json({ message: 'Preference deleted', result });
        } catch (err) {
            next(err);
        }
    });
};
