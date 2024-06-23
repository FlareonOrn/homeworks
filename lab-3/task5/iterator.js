class DepthIterator {
    constructor(root) {
        this.stack = [root];
    }

    next() {
        if (this.stack.length === 0) return { done: true };
        const node = this.stack.pop();
        if (node.children) {
            for (let i = node.children.length - 1; i >= 0; i--) {
                this.stack.push(node.children[i]);
            }
        }
        return { value: node, done: false };
    }

    [Symbol.iterator]() {
        return this;
    }
}

class BreadthIterator {
    constructor(root) {
        this.queue = [root];
    }

    next() {
        if (this.queue.length === 0) return { done: true };
        const node = this.queue.shift();
        if (node.children) {
            for (let child of node.children) {
                this.queue.push(child);
            }
        }
        return { value: node, done: false };
    }

    [Symbol.iterator]() {
        return this;
    }
}

module.exports = { DepthIterator, BreadthIterator };
