const { Animal } = require('./interfaces');

class Lion extends Animal {
    getSpecies() {
        return 'Lion';
    }

    getSubSpecies() {
        return 'Panthera leo';
    }

    getFoodRequirements() {
        return { type: 'Meat', quantity: '5kg/day' };
    }
}

class Elephant extends Animal {
    getSpecies() {
        return 'Elephant';
    }

    getSubSpecies() {
        return 'Loxodonta';
    }

    getFoodRequirements() {
        return { type: 'Vegetation', quantity: '50kg/day' };
    }
}

module.exports = { Lion, Elephant };
