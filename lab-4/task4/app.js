const { LightElementNode, ElementFactory } = require('../../lab-3/task5/lightElementNode');
const { FileSystemLoadStrategy, NetworkLoadStrategy } = require('./imageLoadStrategy');

async function main() {
    const factory = new ElementFactory();

    const root = new LightElementNode('div');

    // Create an image element and load an image using the strategy pattern
    const imageElement = factory.getElement('div');
    const fileSystemStrategy = new FileSystemLoadStrategy();
    const networkStrategy = new NetworkLoadStrategy();

    // Load image from file system (make sure the file exists in the specified path)
    await imageElement.loadImage('./lab-4/task4/capybara.jpg', fileSystemStrategy);

    // Load image from network
    await imageElement.loadImage('https://www.rainforest-alliance.org/wp-content/uploads/2021/06/capybara-square-1-400x400.jpg.webp', networkStrategy);

    root.appendChild(imageElement);
}

main();