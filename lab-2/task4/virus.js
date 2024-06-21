class Virus {
    constructor(weight, age, name, type, children = []) {
        this.weight = weight;
        this.age = age;
        this.name = name;
        this.type = type;
        this.children = children;
    }

    addChild(virus) {
        this.children.push(virus);
    }

    clone() {
        // Deep clone the children
        const clonedChildren = this.children.map(child => child.clone());
        return new Virus(this.weight, this.age, this.name, this.type, clonedChildren);
    }
}

module.exports = Virus;
