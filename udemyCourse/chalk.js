const chalk = require('chalk');
console.log(chalk.blue.inverse('Hello World!'));
console.log(chalk.red.bgYellow.bold('Hello world!'));
console.log(chalk.red('Hello','World','Name'));
console.log(chalk.red('Hello',chalk.underline.bgYellow('worldIs Not for')));
console.log(`
CPU :${chalk.red('90%')}
RAM :${chalk.yellow('50%')}
Memory:${chalk.green('20%')}
`);