class Hero {
    constructor(name) {
        this.name = name;
        this.description = `${name}`;
    }

    getDescription() {
        return this.description;
    }

    getPower() {
        return 0;
    }
}

class Warrior extends Hero {
    constructor(name) {
        super(name);
        this.description = `${name} the Warrior`;
    }

    getPower() {
        return 10;
    }
}

class Mage extends Hero {
    constructor(name) {
        super(name);
        this.description = `${name} the Mage`;
    }

    getPower() {
        return 8;
    }
}

class Paladin extends Hero {
    constructor(name) {
        super(name);
        this.description = `${name} the Paladin`;
    }

    getPower() {
        return 9;
    }
}

module.exports = { Warrior, Mage, Paladin };
