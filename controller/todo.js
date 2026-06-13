const Todo = require('../model/Todo');

const todoSingleData = async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  if (!todo) {
    return res.status(404).json({
      statusMessage: "todo not found"
    });
  }

  res.status(200).json(todo);
};

const todoAllList = async (req, res) => {
  if (req.query.task) {
    const todo = await Todo.find({ task: req.query.task });
    todo.length !== 0
      ? res.status(200).json({
          dataLength: todo.length,
          data: todo
        })
      : res.status(404).json({
          statusMessage: "todo not found"
        });
  } else {
    const todo = await Todo.find();
    todo.length !== 0
      ? res.status(200).json({
          dataLength: todo.length,
          data: todo
        })
      : res.status(404).json({
          statusMessage: "todo not found"
        });
  }
};

const todoCreate = async (req, res) => {
  const todo = new Todo(req.body);
  const result = await todo.save();

  res.status(201).json(result);
};

const todoUpdate = async (req, res) => {
  const todo = await Todo.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  if (!todo) {
    return res.status(404).json({
      statusMessage: "todo not found"
    });
  }

  res.status(200).json(todo);
};

const todoDelete = async (req, res) => {
  const todo = await Todo.findByIdAndDelete(req.params.id);

  res.status(200).json({
    statusMessage: "todo was deleted",
    data: todo
  });
};



module.exports = {
  todoAllList,
  todoSingleData,
  todoCreate,
  todoUpdate,
  todoDelete};