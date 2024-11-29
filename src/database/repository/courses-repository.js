const mongoose = require('mongoose');
const coursesSchema = require('../database/models/schemas/CoursesSchema');

const CourseNotification = mongoose.model('CourseNotification', new mongoose.Schema({ coursesSchema }));

class CoursesRepository {
    async AddCourseNotification(courseDetails) {
        const courseNotification = new CourseNotification(courseDetails);
        return await courseNotification.save();
    }

    async FetchAllCourseNotifications() {
        return await CourseNotification.find({});
    }

    async UpdateCourseNotification(updates) {
        return await CourseNotification.updateOne({}, updates);
    }

    async DeleteCourseNotification(id) {
        return await CourseNotification.findByIdAndDelete(id);
    }
}

module.exports = CoursesRepository;
