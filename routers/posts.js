const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");
const checkPostExist = require("../middlewares/checkPostExists");


//index NB per la ricerca  ad esempio del tag1 sara' /posts?tag=tag1.
router.get("/", postController.index);

//show
router.get("/:id", checkPostExist, postController.show);

//create
//router.post("/", postController.store);

//update
//router.put("/:id", checkPostExist, postController.update);

//modify
//router.patch("/:id", checkPostExist, postController.modify);

//destroy
router.delete("/:id", checkPostExist, postController.destroy);

module.exports = router;