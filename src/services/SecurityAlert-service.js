const SecurityAlertRepository = require('../database/repository/security_alert-repository');
const { APIError } = require('../utils/app-errors');

class SecurityAlertService {
    constructor() {
        this.repository = new SecurityAlertRepository();
    }

    async AddSecurityAlertNotification(notificationDetails) {
        return await this.repository.AddSecurityAlertNotification(notificationDetails);
    }

    async FetchAllSecurityAlertNotifications() {
        return await this.repository.FetchAllSecurityAlertNotifications();
    }

    async UpdateSecurityAlertNotification(updates) {
        return await this.repository.UpdateSecurityAlertNotification(updates);
    }

    async DeleteSecurityAlertNotification(id) {
        return await this.repository.DeleteSecurityAlertNotification(id);
    }
}

module.exports = SecurityAlertService;
