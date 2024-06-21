class Animal {
    getSpecies() {}
    getSubSpecies() {}
    getFoodRequirements() {}
}

class Cage {
    getSize() {}
    getType() {}
    getOccupants() {}
}

class Food {
    getType() {}
    getQuantity() {}
}

class Worker {
    getName() {}
    getRole() {}
    getAssignments() {}
}

class Inventory {
    displayAnimals() {}
    displayWorkers() {}
    displayFoodStock() {}
}

module.exports = { Animal, Cage, Food, Worker, Inventory };
