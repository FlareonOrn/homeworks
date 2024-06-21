class Character {
    constructor() {
        this.features = {};
    }

    setFeature(key, value) {
        this.features[key] = value;
    }

    getFeatures() {
        return this.features;
    }
}

module.exports = Character;
