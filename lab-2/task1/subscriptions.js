const { Subscription } = require('./interfaces');

class DomesticSubscription extends Subscription {
    constructor() {
        super();
        this.monthlyFee = 10;
        this.minimumPeriod = 12;
        this.channels = ['News', 'Sports', 'Movies'];
        this.features = ['HD'];
    }

    getMonthlyFee() {
        return this.monthlyFee;
    }

    getMinimumPeriod() {
        return this.minimumPeriod;
    }

    getChannels() {
        return this.channels;
    }

    getFeatures() {
        return this.features;
    }
}

class EducationalSubscription extends Subscription {
    constructor() {
        super();
        this.monthlyFee = 5;
        this.minimumPeriod = 6;
        this.channels = ['Documentaries', 'Educational'];
        this.features = ['HD', 'On-Demand'];
    }

    getMonthlyFee() {
        return this.monthlyFee;
    }

    getMinimumPeriod() {
        return this.minimumPeriod;
    }

    getChannels() {
        return this.channels;
    }

    getFeatures() {
        return this.features;
    }
}

class PremiumSubscription extends Subscription {
    constructor() {
        super();
        this.monthlyFee = 20;
        this.minimumPeriod = 3;
        this.channels = ['All Channels'];
        this.features = ['HD', '4K', 'On-Demand', 'Live Sports'];
    }

    getMonthlyFee() {
        return this.monthlyFee;
    }

    getMinimumPeriod() {
        return this.minimumPeriod;
    }

    getChannels() {
        return this.channels;
    }

    getFeatures() {
        return this.features;
    }
}

module.exports = { DomesticSubscription, EducationalSubscription, PremiumSubscription };
