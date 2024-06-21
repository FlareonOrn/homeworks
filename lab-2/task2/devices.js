const { Device } = require('./interfaces');

class Laptop extends Device {
    constructor(brand, model, specifications) {
        super();
        this.brand = brand;
        this.model = model;
        this.specifications = specifications;
    }

    getBrand() {
        return this.brand;
    }

    getModel() {
        return this.model;
    }

    getSpecifications() {
        return this.specifications;
    }
}

class Netbook extends Device {
    constructor(brand, model, specifications) {
        super();
        this.brand = brand;
        this.model = model;
        this.specifications = specifications;
    }

    getBrand() {
        return this.brand;
    }

    getModel() {
        return this.model;
    }

    getSpecifications() {
        return this.specifications;
    }
}

class EBook extends Device {
    constructor(brand, model, specifications) {
        super();
        this.brand = brand;
        this.model = model;
        this.specifications = specifications;
    }

    getBrand() {
        return this.brand;
    }

    getModel() {
        return this.model;
    }

    getSpecifications() {
        return this.specifications;
    }
}

class Smartphone extends Device {
    constructor(brand, model, specifications) {
        super();
        this.brand = brand;
        this.model = model;
        this.specifications = specifications;
    }

    getBrand() {
        return this.brand;
    }

    getModel() {
        return this.model;
    }

    getSpecifications() {
        return this.specifications;
    }
}

module.exports = { Laptop, Netbook, EBook, Smartphone };
