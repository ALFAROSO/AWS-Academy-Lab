const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Hello World from Alberth Rodriguez!'));


// const server = http.createServer((req, res) => {
//     res.end('Hello World from Alberth Rodriguez!');
//     });

app.listen(3000);
console.log('Server is running on port 3000');