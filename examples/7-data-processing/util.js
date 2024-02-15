/*
 * Loop over every line in the CSV file and create an
 * object for each line, adding it to rows using the
 * first column as the key
 */
export function cleanup(data) {
  const rows = {}
  for (const row of data.split('\n')) {
    const columns = row.split(',');
    const id = columns[0];
    if (rows[id]) {
      console.log(`Duplicate ID: ${id}`);
    }
    rows[id] = columns;
  }
  return rows;
}
