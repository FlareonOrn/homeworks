const BuilderInterface = require('./builderInterface');
const Character = require('./character');

class EnemyBuilder extends BuilderInterface {
    constructor() {
        super();
        this.character = new Character();
    }

    setHeight(height) {
        this.character.setFeature('height', height);
        return this;
    }

    setBuild(build) {
        this.character.setFeature('build', build);
        return this;
    }

    setHairColor(color) {
        this.character.setFeature('hairColor', color);
        return this;
    }

    setEyeColor(color) {
        this.character.setFeature('eyeColor', color);
        return this;
    }

    setClothes(clothes) {
        this.character.setFeature('clothes', clothes);
        return this;
    }

    setEquipment(equipment) {
        this.character.setFeature('equipment', equipment);
        return this;
    }

    setEvilDeeds(deeds) {
        this.character.setFeature('evilDeeds', deeds);
        return this;
    }

    build() {
        return this.character;
    }
}

module.exports = EnemyBuilder;
