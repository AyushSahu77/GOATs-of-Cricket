const express = require('express')
const app = express()
const fs = require('fs')

const port = 4000

app.get('/', (req, res) => {
    fs.readFile(__dirname + "/" + 'routes/index.html', (err, data) => {
        res.end(data);
    })
});

app.get('/dhoni', (req, res) => {
    fs.readFile(__dirname + "/" + 'routes/msd.html', (err, data) => {
        res.end(data);
    })
  });

app.get('/virat', function (req, res) {
    fs.readFile(__dirname + "/" + 'routes/vk.html', (err, data) => {
        res.end(data);
    })
  });

app.get('/rohit', (req, res) => {
    fs.readFile(__dirname + "/" + 'routes/rs.html', (err, data) => {
        res.end(data);
    })
  });

app.get('/surya', (req, res) => {
    fs.readFile(__dirname + "/" + 'routes/sky.html', (err, data) => {
        res.end(data);
    })
  });

app.get('/hardik', (req, res) => {
    fs.readFile(__dirname + "/" + 'routes/hp.html', (err, data) => {
        res.end(data);
    })
  });

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  });