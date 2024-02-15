function greet(name) {
  console.log(`hello ${name}`);
}

export function processArgsAndGreet() {
  greet(process.argv.length < 3 ? 'world' : process.argv[2]);
}
