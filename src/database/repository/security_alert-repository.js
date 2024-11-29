const mongoose = require('mongoose');
const securityAlertsSchema = require('../database/models/schemas/SecurityAlertsSchema');

const SecurityAlertNotification = mongoose.model('SecurityAlertNotification', new mongoose.Schema({ securityAlertsSchema }));

class SecurityAlertRepository {
    async AddSecurityAlertNotification(notificationDetails) {
        const notification = new SecurityAlertNotification(notificationDetails);
        return await notification.save();
    }

    async FetchAllSecurityAlertNotifications() {
        return await SecurityAlertNotification.find({});
    }

    async UpdateSecurityAlertNotification(updates) {
        return await SecurityAlertNotification.updateOne({}, updates);
    }

    async DeleteSecurityAlertNotification(id) {
        return await SecurityAlertNotification.findByIdAndDelete(id);
    }
}

module.exports = SecurityAlertRepository;
