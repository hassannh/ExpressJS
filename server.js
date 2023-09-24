const express = require("express");

const port = 5000;
const app = express()

app.get('/', (res) => res.send('nadiiii'))

app.listen(port, () => console.log(`server is running on port: ${port} 🐊🐊`))