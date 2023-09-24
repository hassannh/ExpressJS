

const express = require('express');

const port = 5000;
const app = express()

app.get('/', (res) => res.send('nadiiii'))

app.listen(port, () => console.log(`server is running on port: ${port} 🐊🐊`))




// Set the view engine to EJS
app.set('view engine', 'ejs');

// Specify the directory where your views/templates are located
app.set('view', __dirname + '/view');

console.log(__dirname);