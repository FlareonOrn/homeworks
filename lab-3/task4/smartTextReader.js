const fs = require('fs');

class SmartTextReader {
    readFile(filePath) {
        const content = fs.readFileSync(filePath, 'utf8');
        const lines = content.split('\n');
        const result = lines.map(line => Array.from(line));
        return result;
    }
}

module.exports = SmartTextReader;
