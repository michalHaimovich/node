
let books = [
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



exports.book_list = (req, res) => {
    res.send(books);
};

exports.book = (req, res) => {
    const id = req.params.id;
    const foundbook = books.find(b => b.id == id);
    if (!foundbook) {
        return res.status(404).send("book not exist")
    }
    res.send(foundbook);

};


exports.Create = (req, res) => {
    const { id, name } = req.body;

    if (!id || !name) {
        return res.status(400).send("Missing required fields");
    }

    if (typeof id !== "number") {
        return res.status(400).send("id must be a number");
    }

    if (typeof name !== "string") {
        return res.status(400).send("name must be a string");
    }
    books.push(req.body);
    res.status(200).send(books);
};

exports.Delete = (req,res)=>{
    const id = req.params.id;
    const bookToDelete= books.find(b=>b.id==id);
    if (!bookToDelete) {
        return res.status(404).send("book not exist")
    }
    books = books.filter(item => item !==  bookToDelete);
    res.status(200).send(books);
};

exports.Update = (req,res)=>{
    const id1 = req.params.id;
    const bookToDelete= books.find(b=>b.id==id1);
    if (!bookToDelete) {
        return res.status(404).send("book not exist")
    }
    books = books.filter(item => item !==  bookToDelete);
    const { id, name } = req.body;

    if (!id || !name) {
        return res.status(400).send("Missing required fields");
    }

    if (typeof id !== "number") {
        return res.status(400).send("id must be a number");
    }

    if (typeof name !== "string") {
        return res.status(400).send("name must be a string");
    }
    books.push(req.body);
    res.status(200).send(books);
};
