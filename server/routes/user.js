const express = require("express");
const { createUsers, updateUsers, getUser } = require("../controllers/user");

const router = express.Router();

router.post("/user/create", createUsers);
router.put("/user/update", updateUsers);
router.get("/user", getUser);

module.exports = router;
