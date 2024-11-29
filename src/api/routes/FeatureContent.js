const FeatureContentService = require('../../services/FeatureContent-service');

module.exports = (app) => {
    const service = new FeatureContentService();

    // Add a feature content notification preference
    app.post('/notifications/feature-content/add', async (req, res, next) => {
        try {
            const { email_tips_on_courses } = req.body;
            const preferenceData = { email_tips_on_courses };
            const result = await service.AddFeatureContentNotification(preferenceData);
            res.status(201).json(result);
        } catch (err) {
            next(err);
        }
    });

    // Get all feature content notification preferences
    app.get('/notifications/feature-content/all', async (req, res, next) => {
        try {
            const preferences = await service.FetchAllFeatureContentNotifications();
            res.status(200).json(preferences);
        } catch (err) {
            next(err);
        }
    });

    // Update feature content notification preferences
    app.put('/notifications/feature-content/update', async (req, res, next) => {
        try {
            const { email_tips_on_courses } = req.body;
            const updates = { email_tips_on_courses };
            const result = await service.UpdateFeatureContentNotification(updates);
            res.status(200).json(result);
        } catch (err) {
            next(err);
        }
    });

    // Delete a feature content notification preference
    app.delete('/notifications/feature-content/delete/:id', async (req, res, next) => {
        try {
            const { id } = req.params;
            const result = await service.DeleteFeatureContentNotification(id);
            res.status(200).json({ message: 'Preference deleted', result });
        } catch (err) {
            next(err);
        }
    });
};
