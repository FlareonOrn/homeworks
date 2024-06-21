const LightNode = require('./lightNode');

class LightElementNode extends LightNode {
    constructor(tagName, displayType = 'block', closingType = 'with closing tag') {
        super();
        this.tagName = tagName;
        this.displayType = displayType;
        this.closingType = closingType;
        this.cssClasses = [];
        this.children = [];
    }

    addClass(cssClass) {
        this.cssClasses.push(cssClass);
    }

    appendChild(child) {
        if (child instanceof LightNode) {
            this.children.push(child);
        } else {
            throw new Error('Child must be an instance of LightNode');
        }
    }

    getOuterHTML() {
        let classes = this.cssClasses.length > 0 ? ` class="${this.cssClasses.join(' ')}"` : '';
        let innerHTML = this.getInnerHTML();
        if (this.closingType === 'single tag') {
            return `<${this.tagName}${classes}/>`;
        } else {
            return `<${this.tagName}${classes}>${innerHTML}</${this.tagName}>`;
        }
    }

    getInnerHTML() {
        return this.children.map(child => child.getOuterHTML()).join('');
    }

    printTree(indent = 0) {
        let classes = this.cssClasses.length > 0 ? ` class="${this.cssClasses.join(' ')}"` : '';
        console.log(' '.repeat(indent) + `<${this.tagName}${classes}>`);
        this.children.forEach(child => child.printTree(indent + 2));
        if (this.closingType !== 'single tag') {
            console.log(' '.repeat(indent) + `</${this.tagName}>`);
        }
    }
}

module.exports = LightElementNode;
