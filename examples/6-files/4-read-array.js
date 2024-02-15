import fs from 'fs/promises';
const data = await fs.readFile('lecturers.txt','utf-8');
const lecturers = data.split('\n');
console.log(lecturers);
