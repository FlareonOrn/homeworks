const { Warrior, Mage, Paladin } = require('./hero');
const { Clothes, Weapon, Artifact } = require('./inventoryDecorator');

function main() {
    let warrior = new Warrior('Thor');
    console.log(warrior.getDescription(), 'Power:', warrior.getPower());

    warrior = new Clothes(warrior);
    console.log(warrior.getDescription(), 'Power:', warrior.getPower());

    warrior = new Weapon(warrior);
    console.log(warrior.getDescription(), 'Power:', warrior.getPower());

    warrior = new Artifact(warrior);
    console.log(warrior.getDescription(), 'Power:', warrior.getPower());

    let mage = new Mage('Merlin');
    console.log(mage.getDescription(), 'Power:', mage.getPower());

    mage = new Clothes(mage);
    mage = new Artifact(mage);
    console.log(mage.getDescription(), 'Power:', mage.getPower());

    let paladin = new Paladin('Arthur');
    console.log(paladin.getDescription(), 'Power:', paladin.getPower());

    paladin = new Weapon(paladin);
    paladin = new Artifact(paladin);
    console.log(paladin.getDescription(), 'Power:', paladin.getPower());
}

main();
