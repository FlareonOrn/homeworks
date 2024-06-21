const { Food } = require('./interfaces');

class Meat extends Food {
    getType() {
        return 'Meat';
    }

    getQuantity() {
        return '500kg';
    }
}

class Vegetation extends Food {
    getType() {
        return 'Vegetation';
    }

    getQuantity() {
        return '2000kg';
    }
}

module.exports = { Meat, Vegetation };
