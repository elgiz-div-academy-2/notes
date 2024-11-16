const { Router } = require("express");
const noteRouter = require("./note.router");

const router = Router();

router.use("/notes", noteRouter);

module.exports = router;
