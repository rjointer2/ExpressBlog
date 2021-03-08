const express = require('express');
const app = express();

app.listen(3000);

// view engine
app.set('')


app.get('/', (req, res) => {
    res.sendFile('./webpages/index.html', { root: __dirname })
})

app.get('/about', (req, res) => {
    res.sendFile('./webpages/about.html', { root: __dirname})
})

app.use('/', (req, res) => {
    res.sendFile('./webpages/404.html', { root: __dirname})
})