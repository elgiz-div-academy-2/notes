const { Router } = require("express");
const noteController = require("../controllers/note.controller");

const noteRouter = Router();

noteRouter.get("/", noteController.getNotes);
noteRouter.get("/:id", noteController.getNote);
noteRouter.post("/", noteController.createNote);
noteRouter.post("/:id", noteController.updateNote);

module.exports = noteRouter;
