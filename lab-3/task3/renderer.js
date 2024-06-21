class Renderer {
    render(shape) {
        throw new Error('Method not implemented!');
    }
}

class VectorRenderer extends Renderer {
    render(shape) {
        console.log(`Drawing ${shape.getName()} as vector graphics`);
    }
}

class RasterRenderer extends Renderer {
    render(shape) {
        console.log(`Drawing ${shape.getName()} as pixels`);
    }
}

module.exports = { VectorRenderer, RasterRenderer };
