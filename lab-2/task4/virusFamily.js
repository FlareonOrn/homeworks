// virusFamily.js
const Virus = require('./virus');

function createVirusFamily() {
    // Generation 1
    const grandParentVirus = new Virus(1.0, 10, 'GrandParentVirus', 'TypeA');

    // Generation 2
    const parentVirus1 = new Virus(0.8, 5, 'ParentVirus1', 'TypeA');
    const parentVirus2 = new Virus(0.9, 6, 'ParentVirus2', 'TypeA');

    grandParentVirus.addChild(parentVirus1);
    grandParentVirus.addChild(parentVirus2);

    // Generation 3
    const childVirus1 = new Virus(0.4, 2, 'ChildVirus1', 'TypeA');
    const childVirus2 = new Virus(0.5, 3, 'ChildVirus2', 'TypeA');
    const childVirus3 = new Virus(0.45, 1, 'ChildVirus3', 'TypeA');

    parentVirus1.addChild(childVirus1);
    parentVirus1.addChild(childVirus2);
    parentVirus2.addChild(childVirus3);

    return grandParentVirus;
}

module.exports = createVirusFamily;
