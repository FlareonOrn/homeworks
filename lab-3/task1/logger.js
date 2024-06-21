const chalk = require('chalk');

class Logger {
    log(message) {
        console.log(chalk.green(message));
    }

    error(message) {
        console.error(chalk.red(message));
    }

    warn(message) {
        console.warn(chalk.keyword('orange')(message));
    }
}

module.exports = Logger;
