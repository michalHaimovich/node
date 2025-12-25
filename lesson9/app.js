const express = require('express');

const app=express();

const port=3000;

const fs = require('fs');

app.get('/',(req,res)=>{
    res.status(200);
    res.send("hello")
});

app.get('/books', (req, res) => {
    fs.readFile('books.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading file');
        }
        res.send(JSON.parse(data));
    });
});

app.get('/authors', (req, res) => {
    fs.readFile('authors.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading file');
        }
        res.send(JSON.parse(data));
    });
});

app.get('/customers', (req, res) => {
    fs.readFile('customers.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading file');
        }
        res.send(JSON.parse(data));
    });
});

app.listen(port,(error)=>{
    if(!error)
        console.log("succses");
    else console.log("error");
});