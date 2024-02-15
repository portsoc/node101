import fs from 'fs/promises';
const out = 'Hello World!';
await fs.writeFile("hello.txt", out);
