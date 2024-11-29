// database related modules
module.exports = {
    DatabaseConnection: require('./connection'),
    newsRepository: require('./repository/news-repository'),
    coursesRepository: require('./repository/courses-repository'),
    NotificationSettingsRepository: require('./repository/notificationSettings-repository'),
    featuredcontentRepository: require('./repository/featured_content-repository'),
    productupdatestRepository: require('./repository/product_updates-repository'),
    eventsandoffersRepository: require('./repository/events_and_offers-repository'),
    unsubscribeallRepository: require('./repository/unsubscribe_all-repository'),
}