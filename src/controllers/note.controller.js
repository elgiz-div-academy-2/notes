const noteService = require("../services/note.service");

const getNotes = async (req, res) => {
  let list = await noteService.getNotes();
  res.json(list);
};
const getNote = async (req, res) => {
  let item = await noteService.getNote(req.params.id);

  if (!item) return res.status(404).json({ error: "Not is not found" });

  res.json(item);
};

const createNote = async (req, res) => {
  const body = req.body;

  const { title, content } = body;
  let result = await noteService.createNote({ title, content });

  if (!result) res.status(400).json({ error: "Cannot create note" });

  res.json({ message: "Note created successfully", note: result });
};

const updateNote = (req, res) => {};

const deleteNote = (req, res) => {};

const noteController = {
  getNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote,
};

module.exports = noteController;
