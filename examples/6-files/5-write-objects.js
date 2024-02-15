import fs from 'fs/promises';
const lecturers = [
 { name:'Matt', email:'matt.dennis@port.ac.uk' },
 { name:'Rich', email:'rjb@port.ac.uk' },
 { name:'Kirsten', email:'kirsten.smith@port.ac.uk' },  
];
// use JSON.stringify(lecturers, null, 2); to format it for humans
const out = JSON.stringify(lecturers);
await fs.writeFile("lecturers.json", out);
