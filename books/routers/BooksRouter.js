
const express = require("express");

const router = express.Router();

const bookController = require("../controllers/booksController");



router.get("/", bookController.book_list);

router.get("/:id",bookController.book);

router.post("/", bookController.Create);

router.delete("/:id", bookController.Delete);

router.put("/:id" , bookController.Update);

module.exports = router;