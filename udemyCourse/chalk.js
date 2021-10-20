const chalk = require('chalk');
console.log(chalk.blue.inverse('Hello World!'));
console.log(chalk.red.bgYellow.bold('Hello world!'));
console.log(chalk.red('Hello','World','Name'));
console.log(chalk.red('Hello',chalk.underline.bgYellow('worldIs Not for')));
console.log(`
CPU :${chalk.red('100%')}
RAM :${chalk.yellow('50%')}
Memory:${chalk.green('20%')}
`);
const log = console.log;
const error = chalk.bold.red;
const warning = chalk.bold.keyword('orange')
log(error('Danger'));
log(warning('Dangerous'));