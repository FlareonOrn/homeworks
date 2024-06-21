const { Worker } = require('./interfaces');

class Zookeeper extends Worker {
    constructor(name) {
        super();
        this.name = name;
    }

    getName() {
        return this.name;
    }

    getRole() {
        return 'Zookeeper';
    }

    getAssignments() {
        return ['Lion Cage', 'Elephant Cage'];
    }
}

class Veterinarian extends Worker {
    constructor(name) {
        super();
        this.name = name;
    }

    getName() {
        return this.name;
    }

    getRole() {
        return 'Veterinarian';
    }

    getAssignments() {
        return ['Animal Health Check'];
    }
}

module.exports = { Zookeeper, Veterinarian };

