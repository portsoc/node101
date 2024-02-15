// shortcuts for adding colour to console messages
const off = '\x1b[0m';
const red = msg => '\x1b[31m' + msg + off;
const blue = msg => '\x1b[34m' + msg + off;
const bgGreen = msg => '\x1b[42m' + msg + off;
const bgYellow = msg => '\x1b[43m' + msg + off;


let count = 0;

export function test(name, fn) {
  count++;
  try {
    fn();
    console.log(`[${count}] ${blue('Success')}: ${name}`);
  } catch (e) {
    console.error(`[${count}] ${red('Failure')}: ${name}`);
    console.error(bgYellow(`[${count}] ${e.message}`));
    throw e;
  }
}

export function msg(message) {
  console.log(bgGreen(` ${message} `));
}
