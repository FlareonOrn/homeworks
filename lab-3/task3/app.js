const { VectorRenderer, RasterRenderer } = require('./renderer');
const { Circle, Square, Triangle } = require('./shape');

function main() {
    const vectorRenderer = new VectorRenderer();
    const rasterRenderer = new RasterRenderer();

    const shapes = [
        new Circle(vectorRenderer),
        new Square(rasterRenderer),
        new Triangle(vectorRenderer),
        new Circle(rasterRenderer),
        new Square(vectorRenderer),
        new Triangle(rasterRenderer),
    ];

    shapes.forEach(shape => shape.draw());
}

main();
