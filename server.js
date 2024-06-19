const express = require('express');

const app = express();

app.get('/', (req, res) => res.send(<h1>'Hello World from Alberth Rodriguez!'</h1>));


// const server = http.createServer((req, res) => {
//     res.end('Hello World from Alberth Rodriguez!');
//     });

app.listen(3000);
console.log('Server is running on port 3000');