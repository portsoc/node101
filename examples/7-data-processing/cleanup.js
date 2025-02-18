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


/*
 * This script reads a CSV file and checks for duplicate entries
 * in the first column.  If an output file is specified, it performs
 * a cleanup operation where only the last instance of each duplicate
 * is kept, and writes the cleaned data to a new CSV file.
 *
 * Usage:
 *   node cleanup.js <input-filename> [<output-filename>]
 *
 * Example:
 *   node cleanup.js students.csv cleaned.csv
 *
 * Arguments:
 *   <input-filename>    The path to the input CSV file.
 *   [<output-filename>] Optional. The path to the output
 *                       CSV file where cleaned data will be saved.
 */
if (process.argv.length < 3) {
  console.log('Usage: node cleanup <filename> [<output-filename>]');
  process.exit(1);
}

import { promises as fs } from 'fs';
import { cleanup } from './util.js';

const inputFile = process.argv[2];
const outputFile = process.argv[3];

// Read the input CSV file
const data = await fs.readFile(inputFile,'utf-8');

// Process the data to remove duplicates
const processed = cleanup(data);

// If an output file is specified, write the cleaned data to the output file
if  (outputFile) {
  const asCSV = Object.values(processed.rows).join('\n');
  await fs.writeFile(outputFile, asCSV, 'utf-8');

  // Log the number of duplicates removed and the size reduction
  if (processed.removed > 0) {
    console.log(`${processed.removed} duplicate${processed.removed===1?"":"s"} identified`);
    console.log(`Size reduced from ${processed.before} to ${processed.after} rows`);
  }
  console.log(`Results written to ${outputFile}`);
}
