const fs = require('fs');
const LightElementNode = require('../task5/lightElementNode');
const LightTextNode = require('../task5/lightTextNode');

function readBook(filePath) {
    return fs.readFileSync(filePath, 'utf8').split('\n');
}

function createElementFromLine(line, index) {
    let element;
    if (index === 0) {
        element = new LightElementNode('h1');
    } else if (line.length < 20) {
        element = new LightElementNode('h2');
    } else if (line.startsWith(' ')) {
        element = new LightElementNode('blockquote');
    } else {
        element = new LightElementNode('p');
    }
    element.appendChild(new LightTextNode(line));
    return element;
}

function createTreeFromText(lines) {
    const root = new LightElementNode('div');
    lines.forEach((line, index) => {
        const element = createElementFromLine(line, index);
        root.appendChild(element);
    });
    return root;
}

function main() {
    const filePath = 'book.txt';
    const lines = readBook(filePath);

    const tree = createTreeFromText(lines);
    tree.printTree();

    const memoryUsage = process.memoryUsage();
    console.log('Memory usage:', memoryUsage);
}

main();
