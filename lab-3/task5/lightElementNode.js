const LightNode = require('./lightNode');

class LightElementNode extends LightNode {
    constructor(tagName, displayType = 'block', closingType = 'with closing tag') {
        super();
        this.tagName = tagName;
        this.displayType = displayType;
        this.closingType = closingType;
        this.cssClasses = [];
        this.children = [];
        this.eventListeners = {};  // Object to store event listeners
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

    addEventListener(event, listener) {
        if (!this.eventListeners[event]) {
            this.eventListeners[event] = [];
        }
        this.eventListeners[event].push(listener);
    }

    triggerEvent(event) {
        if (this.eventListeners[event]) {
            this.eventListeners[event].forEach(listener => listener());
        }
        this.children.forEach(child => {
            if (child instanceof LightElementNode) {
                child.triggerEvent(event);
            }
        });
    }

    getOuterHTML() {
        let classes = this.cssClasses.length > 0 ?  class="${this.cssClasses.join(' ')}" : '';
        let innerHTML = this.getInnerHTML();
        if (this.closingType === 'single tag') {
            return <${this.tagName}${classes}/>;
        } else {
            return <${this.tagName}${classes}>${innerHTML}</${this.tagName}>;
        }
    }

    getInnerHTML() {
        return this.children.map(child => child.getOuterHTML()).join('');
    }

    printTree(indent = 0) {
        let classes = this.cssClasses.length > 0 ?  class="${this.cssClasses.join(' ')}" : '';
        console.log(' '.repeat(indent) + <${this.tagName}${classes}>);
        this.children.forEach(child => child.printTree(indent + 2));
        if (this.closingType !== 'single tag') {
            console.log(' '.repeat(indent) + </${this.tagName}>);
        }
    }
}

class ElementFactory {
    constructor() {
        this.elements = {};
    }

    getElement(tagName, displayType = 'block', closingType = 'with closing tag') {
        const key = ${tagName}-${displayType}-${closingType};
        if (!this.elements[key]) {
            this.elements[key] = new LightElementNode(tagName, displayType, closingType);
        }
        return this.elements[key];
    }
}

module.exports = { LightElementNode, ElementFactory };