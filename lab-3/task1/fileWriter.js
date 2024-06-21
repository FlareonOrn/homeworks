const fs = require('fs');

class FileWriter {
    constructor(filename) {
        this.filename = filename;
    }

    write(message) {
        fs.appendFileSync(this.filename, message);
    }

    writeLine(message) {
        fs.appendFileSync(this.filename, message + '\n');
    }
}

module.exports = FileWriter;
