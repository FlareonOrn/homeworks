const LightElementNode = require('./lightElementNode');
const LightTextNode = require('./lightTextNode');

function main() {
    // Create a div element
    const div = new LightElementNode('div');
    div.addClass('container');
    div.addClass('main');

    // Create a paragraph element
    const p = new LightElementNode('p');
    const text1 = new LightTextNode('Hello, this is a paragraph.');
    p.appendChild(text1);

    // Create an image element
    const img = new LightElementNode('img', 'inline', 'single tag');
    img.addClass('image');

    // Append paragraph and image to the div
    div.appendChild(p);
    div.appendChild(img);

    // Output the tree structure of the div
    div.printTree();
}

main();
