class Subscription {
    getMonthlyFee() {}
    getMinimumPeriod() {}
    getChannels() {}
    getFeatures() {}
}

class SubscriptionFactory {
    createSubscription(type, details) {}
}

module.exports = { Subscription, SubscriptionFactory };
