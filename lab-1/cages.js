const { Cage } = require('./interfaces');

class SmallCage extends Cage {
    getSize() {
        return 'Small';
    }

    getType() {
        return 'Mammal';
    }

    getOccupants() {
        return ['Lion'];
    }
}

class LargeCage extends Cage {
    getSize() {
        return 'Large';
    }

    getType() {
        return 'Herbivore';
    }

    getOccupants() {
        return ['Elephant'];
    }
}

module.exports = { SmallCage, LargeCage };
