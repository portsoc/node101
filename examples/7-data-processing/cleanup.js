import { promises as fs } from 'fs';
import { cleanup } from './util.js';

if  (process.argv.length < 3) {
  console.log('Usage: node cleanup <filename> [<output-filename>]');
  process.exit(1);
}

const inputFile = process.argv[2];
const outputFile = process.argv[3];

// read the file
const data = await fs.readFile(inputFile,'utf-8');

// process the data
const processed = cleanup(data);

if  (outputFile) {
  // write processed data as a CSV file
  const asCSV = Object.values(processed).join('\n');
  await fs.writeFile(outputFile, asCSV, 'utf-8');
  console.log(`cleanup stored results in ${outputFile}`);
}
