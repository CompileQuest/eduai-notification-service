const SecurityAlertService = require('../../services/SecurityAlert-service');

module.exports = (app) => {
    const service = new SecurityAlertService();

    // Add a security alert notification preference
    app.post('/notifications/security-alerts/add', async (req, res, next) => {
        try {
            const { email_unusual_activity, email_new_browser_signin } = req.body;
            const preferenceData = { email_unusual_activity, email_new_browser_signin };
            const result = await service.AddSecurityAlertNotification(preferenceData);
            res.status(201).json(result);
        } catch (err) {
            next(err);
        }
    });

    // Get all security alert notification preferences
    app.get('/notifications/security-alerts/all', async (req, res, next) => {
        try {
            const preferences = await service.FetchAllSecurityAlertNotifications();
            res.status(200).json(preferences);
        } catch (err) {
            next(err);
        }
    });

    // Update security alert notification preferences
    app.put('/notifications/security-alerts/update', async (req, res, next) => {
        try {
            const { email_unusual_activity, email_new_browser_signin } = req.body;
            const updates = { email_unusual_activity, email_new_browser_signin };
            const result = await service.UpdateSecurityAlertNotification(updates);
            res.status(200).json(result);
        } catch (err) {
            next(err);
        }
    });

    // Delete a security alert notification preference
    app.delete('/notifications/security-alerts/delete/:id', async (req, res, next) => {
        try {
            const { id } = req.params;
            const result = await service.DeleteSecurityAlertNotification(id);
            res.status(200).json({ message: 'Preference deleted', result });
        } catch (err) {
            next(err);
        }
    });
};
