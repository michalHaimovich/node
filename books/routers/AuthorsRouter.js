
const express = require("express");

const router = express.Router();

const authorController = require("../controllers/authorsController");



router.get("/", authorController.authorsList);

router.get("/:id",authorController.author);

router.post("/", authorController.Create);

router.delete("/:id", authorController.Delete);

router.put("/:id" , authorController.Delete);

module.exports = router;