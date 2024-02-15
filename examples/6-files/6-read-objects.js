import fs from 'fs/promises';
const data = await fs.readFile('lecturers.json');
const lecturers = JSON.parse(data);
console.log(lecturers);
