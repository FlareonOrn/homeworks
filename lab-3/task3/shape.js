class Shape {
    constructor(renderer) {
        this.renderer = renderer;
    }

    getName() {
        throw new Error('Method not implemented!');
    }

    draw() {
        this.renderer.render(this);
    }
}

class Circle extends Shape {
    getName() {
        return 'Circle';
    }
}

class Square extends Shape {
    getName() {
        return 'Square';
    }
}

class Triangle extends Shape {
    getName() {
        return 'Triangle';
    }
}

module.exports = { Circle, Square, Triangle };
