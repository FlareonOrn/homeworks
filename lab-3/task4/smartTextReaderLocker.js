const SmartTextReader = require('./smartTextReader');

class SmartTextReaderLocker {
    constructor(pattern) {
        this.smartTextReader = new SmartTextReader();
        this.pattern = pattern;
    }

    readFile(filePath) {
        if (this.pattern.test(filePath)) {
            console.log('Access denied!');
            return null;
        }
        return this.smartTextReader.readFile(filePath);
    }
}

module.exports = SmartTextReaderLocker;
