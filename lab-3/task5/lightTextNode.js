const LightNode = require('./lightNode');

class LightTextNode extends LightNode {
    constructor(text) {
        super();
        this.text = text;
    }

    getOuterHTML() {
        return this.text;
    }

    getInnerHTML() {
        return this.text;
    }

    printTree(indent = 0) {
        console.log(' '.repeat(indent) + this.text);
    }
}

module.exports = LightTextNode;
