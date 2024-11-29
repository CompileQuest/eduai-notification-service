const EventsAndOffersService = require('../../services/EventsAndOffers-service');

module.exports = (app) => {
    const service = new EventsAndOffersService();

    // Add an event and offer notification preference
    app.post('/notifications/events-and-offers/add', async (req, res, next) => {
        try {
            const { email_promos_events } = req.body;
            const preferenceData = { email_promos_events };
            const result = await service.AddEventsAndOffersNotification(preferenceData);
            res.status(201).json(result);
        } catch (err) {
            next(err);
        }
    });

    // Get all event and offer notification preferences
    app.get('/notifications/events-and-offers/all', async (req, res, next) => {
        try {
            const preferences = await service.FetchAllEventsAndOffersNotifications();
            res.status(200).json(preferences);
        } catch (err) {
            next(err);
        }
    });

    // Update event and offer notification preferences
    app.put('/notifications/events-and-offers/update', async (req, res, next) => {
        try {
            const { email_promos_events } = req.body;
            const updates = { email_promos_events };
            const result = await service.UpdateEventsAndOffersNotification(updates);
            res.status(200).json(result);
        } catch (err) {
            next(err);
        }
    });

    // Delete an event and offer notification preference
    app.delete('/notifications/events-and-offers/delete/:id', async (req, res, next) => {
        try {
            const { id } = req.params;
            const result = await service.DeleteEventsAndOffersNotification(id);
            res.status(200).json({ message: 'Preference deleted', result });
        } catch (err) {
            next(err);
        }
    });
};
