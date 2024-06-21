const { Inventory } = require('./interfaces');

class ZooInventory extends Inventory {
    constructor(animals, workers, foodStock) {
        super();
        this.animals = animals;
        this.workers = workers;
        this.foodStock = foodStock;
    }

    displayAnimals() {
        return this.animals.map(animal => ({
            species: animal.getSpecies(),
            subspecies: animal.getSubSpecies(),
            foodRequirements: animal.getFoodRequirements()
        }));
    }

    displayWorkers() {
        return this.workers.map(worker => ({
            name: worker.getName(),
            role: worker.getRole(),
            assignments: worker.getAssignments()
        }));
    }

    displayFoodStock() {
        return this.foodStock.map(food => ({
            type: food.getType(),
            quantity: food.getQuantity()
        }));
    }
}

module.exports = ZooInventory;
