const SmartTextReader = require('./smartTextReader');

class SmartTextChecker {
    constructor() {
        this.smartTextReader = new SmartTextReader();
    }

    readFile(filePath) {
        console.log('Opening file:', filePath);
        const content = this.smartTextReader.readFile(filePath);
        console.log('Successfully read file:', filePath);
        const lineCount = content.length;
        const charCount = content.flat().length;
        console.log(`Total lines: ${lineCount}, Total characters: ${charCount}`);
        console.log('Closing file:', filePath);
        return content;
    }
}

module.exports = SmartTextChecker;
