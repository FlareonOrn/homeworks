class ElementState {
    constructor(element) {
        this.element = element;
    }

    show() {
        throw new Error('This method should be overridden');
    }

    hide() {
        throw new Error('This method should be overridden');
    }
}

class VisibleState extends ElementState {
    show() {
        console.log(`${this.element.tagName} is already visible.`);
    }

    hide() {
        console.log(`Hiding ${this.element.tagName}.`);
        this.element.setState(new HiddenState(this.element));
    }
}

class HiddenState extends ElementState {
    show() {
        console.log(`Showing ${this.element.tagName}.`);
        this.element.setState(new VisibleState(this.element));
    }

    hide() {
        console.log(`${this.element.tagName} is already hidden.`);
    }
}

module.exports = { VisibleState, HiddenState };
