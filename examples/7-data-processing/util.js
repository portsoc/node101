/*
 * Processes CSV data to remove duplicate entries based on the first column.
 * Keeps only the last instance of each duplicate entry.
 *
 * @param {string} data - The CSV data to process.
 * @returns {Object} - An object containing the processed rows and statistics.
 *   - rows: An object with the first column as the key and the row data as the value.
 *   - before: The number of rows before cleanup.
 *   - after: The number of rows after cleanup.
 *   - removed: The number of duplicate rows removed.
 */
export function cleanup(data) {
  // Create an object to store the results
  const result = {
    rows: {},    // Stores unique rows with the first column as the key
    before: 0,   // Number of rows before cleanup
    after: 0,    // Number of rows after cleanup
    removed: 0,  // Number of duplicate rows removed
  };

  // Split the CSV data into individual rows
  const rows = data.split('\n');
  result.before = rows.length;

  // Process each row
  for (const row of rows) {
    const columns = row.split(',');
    const id = columns[0]; // Use the first column as the unique identifier

    // Check if the ID already exists in the result
    if (result.rows[id]) {
      console.log(`Duplicate ID: ${id}`);
      result.removed++;
    } else {
      result.after++;
    }

    // Store the row, keeping only the last instance of each duplicate
    result.rows[id] = columns;
  }

  return result;
}