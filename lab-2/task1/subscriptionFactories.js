const { SubscriptionFactory } = require('./interfaces');
const { DomesticSubscription, EducationalSubscription, PremiumSubscription } = require('./subscriptions');

class WebSite extends SubscriptionFactory {
    createSubscription(type, details) {
        console.log('Creating subscription via Website...');
        return this._createSubscription(type, details);
    }

    _createSubscription(type, details) {
        switch (type) {
            case 'Domestic':
                return new DomesticSubscription();
            case 'Educational':
                return new EducationalSubscription();
            case 'Premium':
                return new PremiumSubscription();
            default:
                throw new Error('Invalid subscription type');
        }
    }
}

class MobileApp extends SubscriptionFactory {
    createSubscription(type, details) {
        console.log('Creating subscription via Mobile App...');
        return this._createSubscription(type, details);
    }

    _createSubscription(type, details) {
        switch (type) {
            case 'Domestic':
                return new DomesticSubscription();
            case 'Educational':
                return new EducationalSubscription();
            case 'Premium':
                return new PremiumSubscription();
            default:
                throw new Error('Invalid subscription type');
        }
    }
}

class ManagerCall extends SubscriptionFactory {
    createSubscription(type, details) {
        console.log('Creating subscription via Manager Call...');
        return this._createSubscription(type, details);
    }

    _createSubscription(type, details) {
        switch (type) {
            case 'Domestic':
                return new DomesticSubscription();
            case 'Educational':
                return new EducationalSubscription();
            case 'Premium':
                return new PremiumSubscription();
            default:
                throw new Error('Invalid subscription type');
        }
    }
}

module.exports = { WebSite, MobileApp, ManagerCall };
