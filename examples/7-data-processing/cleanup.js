/*
 * Read a CSV file, and report on  whether there
 * are duplicate entries in the first column.
 *
 * Optionally (if an output file is specified)
 * perform a cleanup operation on the data where
 * the last instance of a duplicate is kept, and
 * writes the resulting data to a new CSV file.
 * 
 * e.g. node cleanup.js students.csv cleaned.csv
 */
if (process.argv.length < 3) {
  console.log('Usage: node cleanup <filename> [<output-filename>]');
  process.exit(1);
}

import { promises as fs } from 'fs';
import { cleanup } from './util.js';

const inputFile = process.argv[2];
const outputFile = process.argv[3];

// read the file
const data = await fs.readFile(inputFile,'utf-8');

// process the data
const processed = cleanup(data);

// write processed data as a CSV file if required
if  (outputFile) {
  const asCSV = Object.values(processed.rows).join('\n');
  await fs.writeFile(outputFile, asCSV, 'utf-8');
  if (processed.removed > 0) {
    console.log(`${processed.removed} duplicate${processed.removed===1?"":"s"} identified`);
    console.log(`Size reduced from ${processed.before} to ${processed.after} rows`);
  }
  console.log(`Results written to ${outputFile}`);
}
