import fs from 'fs/promises';
const lecturers = ['Matt','Rich','Kirsten'];
const out = lecturers.join("\n");
await fs.writeFile("lecturers.txt", out);
