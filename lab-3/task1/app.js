const FileLogger = require('./fileLogger');

function main() {
    const logger = new FileLogger('logfile.txt');

    logger.log('This is a log message.');
    logger.error('This is an error message.');
    logger.warn('This is a warning message.');
}

main();
