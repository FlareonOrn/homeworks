const Logger = require('./logger');
const FileWriter = require('./fileWriter');

class FileLogger extends Logger {
    constructor(filename) {
        super();
        this.fileWriter = new FileWriter(filename);
    }

    log(message) {
        super.log(message);
        this.fileWriter.writeLine('LOG: ' + message);
    }

    error(message) {
        super.error(message);
        this.fileWriter.writeLine('ERROR: ' + message);
    }

    warn(message) {
        super.warn(message);
        this.fileWriter.writeLine('WARN: ' + message);
    }
}

module.exports = FileLogger;
