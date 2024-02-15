/*
 * Loop over every line in the CSV file and create an
 * object for each line, adding it to rows using the
 * first column as the key
 * @param {string} data - The CSV data to process
 * @returns {Object} - An object with the first column as the key
 */
export function cleanup(data) {

  // create an object to store the results
  const result = {
    rows: {},
    before: 0,
    after: 0,
    removed:0
  }
  const rows = data.split('\n');
  result.before = rows.length;

  for (const row of rows) {
    const columns = row.split(',');
    const id = columns[0];
    if (result.rows[id]) {
      console.log(`Duplicate ID: ${id}`);
      result.removed++;
    } else {
      result.after++;
    }
    result.rows[id] = columns;
  }
  return result;
}
