const SmartTextReader = require('./smartTextReader');
const SmartTextChecker = require('./smartTextChecker');
const SmartTextReaderLocker = require('./smartTextReaderLocker');

function main() {
    const filePath = 'example.txt';
    const restrictedFilePath = 'restricted_example.txt';

    // Create example files for testing
    const fs = require('fs');
    fs.writeFileSync(filePath, 'Hello\nWorld');
    fs.writeFileSync(restrictedFilePath, 'Restricted\nAccess');

    console.log('--- SmartTextReader ---');
    const smartTextReader = new SmartTextReader();
    console.log(smartTextReader.readFile(filePath));

    console.log('--- SmartTextChecker ---');
    const smartTextChecker = new SmartTextChecker();
    console.log(smartTextChecker.readFile(filePath));

    console.log('--- SmartTextReaderLocker ---');
    const smartTextReaderLocker = new SmartTextReaderLocker(/restricted_/);
    console.log(smartTextReaderLocker.readFile(filePath));
    console.log(smartTextReaderLocker.readFile(restrictedFilePath));
}

main();
