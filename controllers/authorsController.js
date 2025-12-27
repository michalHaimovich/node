
let authors = [

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

exports.authorsList = (req, res,next) => {
    const num = Math.floor(Math.random() * 11);
    console.log(num);
    if(num==9)
       return res.status(401).send("not good num");
    res.send(authors);
};

exports.author = (req, res) => {
    const id = req.params.id;
    const foundauthor = authors.find(b => b.id == id);
    if (!foundauthor) {
        return res.status(404).send("author not exist")
    }
    res.status(200).send(foundauthor);
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

    authors.push(req.body);
    res.status(200).send(authors);
};

exports.Delete = (req, res) => {
    const id = req.params.id;
    const authorToDelete = authors.find(b => b.id == id);
     if (!authorToDelete) {
        return res.status(404).send("author not exist")
    }
    authors = authors.filter(item => item !== authorToDelete)
};

exports.Update = (req, res) => {
    const id1 = req.params.id;
    const authorToDelete = authors.find(b => b.id == id1);
    if (!authorToDelete) {
        return res.status(404).send("author not exist")
    }
    authors = authors.filter(item => item !== authorToDelete);

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
    authors.push(req.body);
    res.status(200).send(authors);
};




