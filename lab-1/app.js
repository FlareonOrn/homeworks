const { Lion, Elephant } = require('./animals');
const { SmallCage, LargeCage } = require('./cages');
const { Meat, Vegetation } = require('./food');
const { Zookeeper, Veterinarian } = require('./workers');
const ZooInventory = require('./inventory');

const lion = new Lion();
const elephant = new Elephant();

const meat = new Meat();
const vegetation = new Vegetation();

const zookeeper = new Zookeeper('John');
const veterinarian = new Veterinarian('Dr. Smith');

const animals = [lion, elephant];
const workers = [zookeeper, veterinarian];
const foodStock = [meat, vegetation];

const zooInventory = new ZooInventory(animals, workers, foodStock);

console.log('Animals:', zooInventory.displayAnimals());
console.log('Workers:', zooInventory.displayWorkers());
console.log('Food Stock:', zooInventory.displayFoodStock());
