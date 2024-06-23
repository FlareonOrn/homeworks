class Visitor {
    visit(element) {
        throw new Error('This method should be overridden');
    }
}

class HighlightVisitor extends Visitor {
    visit(element) {
        if (element.cssClasses) {
            element.addClass('highlight');
        }
        element.children.forEach(child => child.accept(this));
    }
}

module.exports = { Visitor, HighlightVisitor };
