const CoursesRepository = require('../repository/courses-repository');
const { APIError } = require('../utils/app-errors');

class CoursesService {
    constructor() {
        this.repository = new CoursesRepository();
    }

    async AddCourseNotification(courseDetails) {
        return await this.repository.AddCourseNotification(courseDetails);
    }

    async FetchAllCourseNotifications() {
        return await this.repository.FetchAllCourseNotifications();
    }

    async UpdateCourseNotification(updates) {
        return await this.repository.UpdateCourseNotification(updates);
    }

    async DeleteCourseNotification(id) {
        return await this.repository.DeleteCourseNotification(id);
    }
}

module.exports = CoursesService;
