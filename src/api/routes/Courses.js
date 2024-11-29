const CoursesService = require('../../services/Courses-Service');

module.exports = (app) => {
    const service = new CoursesService();

    // Add a course notification preference
    app.post('/notifications/courses/add', async (req, res, next) => {
        try {
            const { updates_from_classes, updates_from_teacher_discussions, personalized_class_recommendations } = req.body;
            const preferenceData = { updates_from_classes, updates_from_teacher_discussions, personalized_class_recommendations };
            const result = await service.AddCourseNotification(preferenceData);
            res.status(201).json(result);
        } catch (err) {
            next(err);
        }
    });

    // Get all course notification preferences
    app.get('/notifications/courses/all', async (req, res, next) => {
        try {
            const preferences = await service.FetchAllCourseNotifications();
            res.status(200).json(preferences);
        } catch (err) {
            next(err);
        }
    });

    // Update course notification preferences
    app.put('/notifications/courses/update', async (req, res, next) => {
        try {
            const { updates_from_classes, updates_from_teacher_discussions, personalized_class_recommendations } = req.body;
            const updates = { updates_from_classes, updates_from_teacher_discussions, personalized_class_recommendations };
            const result = await service.UpdateCourseNotification(updates);
            res.status(200).json(result);
        } catch (err) {
            next(err);
        }
    });

    // Delete a course notification preference
    app.delete('/notifications/courses/delete/:id', async (req, res, next) => {
        try {
            const { id } = req.params;
            const result = await service.DeleteCourseNotification(id);
            res.status(200).json({ message: 'Preference deleted', result });
        } catch (err) {
            next(err);
        }
    });
};
