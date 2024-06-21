const { WebSite, MobileApp, ManagerCall } = require('./subscriptionFactories');

const websiteFactory = new WebSite();
const mobileAppFactory = new MobileApp();
const managerCallFactory = new ManagerCall();

const websiteSubscription = websiteFactory.createSubscription('Domestic');
const mobileAppSubscription = mobileAppFactory.createSubscription('Educational');
const managerCallSubscription = managerCallFactory.createSubscription('Premium');

console.log('Website Subscription:', {
    monthlyFee: websiteSubscription.getMonthlyFee(),
    minimumPeriod: websiteSubscription.getMinimumPeriod(),
    channels: websiteSubscription.getChannels(),
    features: websiteSubscription.getFeatures(),
});

console.log('Mobile App Subscription:', {
    monthlyFee: mobileAppSubscription.getMonthlyFee(),
    minimumPeriod: mobileAppSubscription.getMinimumPeriod(),
    channels: mobileAppSubscription.getChannels(),
    features: mobileAppSubscription.getFeatures(),
});

console.log('Manager Call Subscription:', {
    monthlyFee: managerCallSubscription.getMonthlyFee(),
    minimumPeriod: managerCallSubscription.getMinimumPeriod(),
    channels: managerCallSubscription.getChannels(),
    features: managerCallSubscription.getFeatures(),
});
