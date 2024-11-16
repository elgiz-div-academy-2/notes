const noteModel = require("../models/note.model");

const getNotes = async () => {
  let list = await noteModel.find();
  return list;
};

const getNote = async (id) => {
  let item = await noteModel.findById(id);
  return item;
};

const createNote = async (params) => {
  let note = await noteModel.create({
    title: params.title,
    content: params.content,
  });

  await note.save();

  return note;
};

const updateNote = () => {};

const deleteNote = (id) => {};

const noteService = {
  getNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote,
};

module.exports = noteService;
