import chalk from 'chalk';

let count = 0;

export function test(name, fn) {
  count++;
  try {
    fn();
    console.log(chalk.blue(`[${count}] Success: ${name}`));
  } catch (e) {
    console.error(chalk.red(`[${count}] Failure: ${name}`));
    console.error(chalk.white.bgYellow.bold(`[${count}] ${e.message}`));
    throw e;
  }
}

export function msg(message) {
  console.log(chalk.bgGreen.bold(` ${message} `));
}
