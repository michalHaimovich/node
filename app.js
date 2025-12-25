const express = require('express');
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

const booksRouter = require("./routers/BooksRouter")

const authorRouter = require("./routers/AuthorsRouter")

app.use("/books", booksRouter);

app.use("/authors", authorRouter);

app.listen(3000, (error) => {
    if (!error) {
        console.log("succedd in port:")
    }
    else {
        console.log("no succedd in port:")
    }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

