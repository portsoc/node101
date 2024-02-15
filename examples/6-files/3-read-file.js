import fs from 'fs/promises';
const data = await fs.readFile('hello.txt','utf-8');
console.log(data);
