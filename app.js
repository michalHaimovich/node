const express = require('express');
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

const books = [
    {
        "id": 1,
        "name": "a"
    },
    {
        "id": 2,
        "name": "b"
    },
    {
        "id": 3,
        "name": "c"
    },
    {
        "id": 4,
        "name": "d"
    },
    {
        "id": 5,
        "name": "e"
    }
];

const authors = [

    {
        "id": 10,
        "name": "aa"
    },
    {
        "id": 11,
        "name": "bb"
    },
    {
        "id": 12,
        "name": "cc"
    },
    {
        "id": 14,
        "name": "dd"
    },
    {
        "id": 15,
        "name": "ee"
    }
];

app.get("/books", (req, res) => {
    res.send(books);
});

app.get("/books/:id", (req, res) => {
    const id = req.params.id;
    const foundbook = books.find(b => b.id == id);
    res.send(foundbook);

});


app.post("/books", (req, res) => {

    books.push(req.body);
    res.status(200).send(books);
})

app.delete("/books/:id",(req,res)=>{
    const id = req.params.id;
    const bookToDelete= books.find(b=>b.id=id);
    books = books.filter(item => item !==  bookToDelete)
})

app.put("/books/:id",(req,res)=>{
    const id = req.params.id;
    const bookToDelete= books.find(b=>b.id=id);
    books = books.filter(item => item !==  bookToDelete);
    books.push(req.body);
    res.status(200).send(books);
})

////

app.get("/authors", (req, res) => {
    res.send(authors);
});

app.get("/authors/:id", (req, res) => {
    const id = req.params.id;
    const foundauthor = authors.find(b => b.id == id);
    res.send(foundauthor);

});


app.post("/authors", (req, res) => {

    authors.push(req.body);
    res.status(200).send(authors);
})

app.delete("/authors/:id",(req,res)=>{
    const id = req.params.id;
    const authorToDelete= authors.find(b=>b.id=id);
    authors = authors.filter(item => item !==  authorToDelete)
})

app.put("/authors/:id",(req,res)=>{
    const id = req.params.id;
    const authorToDelete= authors.find(b=>b.id=id);
    authors = authors.filter(item => item !==  authorToDelete);
    authors.push(req.body);
    res.status(200).send(authors);
})

app.listen(3000, (error) => {
    if (!error) {
        console.log("succedd in port:")
    }
    else {
        console.log("no succedd in port:")
    }
});
app.put("/books/:id", (req, res) => {
    const id = req.params.id;

    books.push(req.body);
    res.status(200).send(books);
})



