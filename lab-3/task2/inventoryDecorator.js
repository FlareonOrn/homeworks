class InventoryDecorator {
    constructor(hero) {
        this.hero = hero;
    }

    getDescription() {
        return this.hero.getDescription();
    }

    getPower() {
        return this.hero.getPower();
    }
}

class Clothes extends InventoryDecorator {
    getDescription() {
        return `${super.getDescription()} with Clothes`;
    }

    getPower() {
        return super.getPower() + 1;
    }
}

class Weapon extends InventoryDecorator {
    getDescription() {
        return `${super.getDescription()} with Weapon`;
    }

    getPower() {
        return super.getPower() + 5;
    }
}

class Artifact extends InventoryDecorator {
    getDescription() {
        return `${super.getDescription()} with Artifact`;
    }

    getPower() {
        return super.getPower() + 3;
    }
}

module.exports = { Clothes, Weapon, Artifact };
