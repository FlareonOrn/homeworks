class LightNode {
    constructor() {
        this.onCreated();
    }

    onCreated() {
        console.log('LightNode created');
    }

    onInserted() {
        console.log('LightNode inserted');
    }
}

module.exports = LightNode;
