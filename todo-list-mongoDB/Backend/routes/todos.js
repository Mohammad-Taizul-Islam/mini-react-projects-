import { Router } from 'express';
import Todo, { find, findById, findByIdAndDelete } from '../models/Todo';

const router = Router();




// Get all todos
router.get('/', async (req, res) => {
  try {
    const todos = await find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});




// Add a new todo
router.post('/', async (req, res) => {
  const todo = new Todo({
    text: req.body.text,
  });

  try {
    const newTodo = await todo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});



// Update a todo
router.patch('/:id', async (req, res) => {
  try {
    const todo = await findById(req.params.id);
    if (req.body.text) todo.text = req.body.text;
    if (req.body.completed !== undefined) todo.completed = req.body.completed;

    const updatedTodo = await todo.save();
    res.json(updatedTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});



// Delete a todo
router.delete('/:id', async (req, res) => {
  try {
    await findByIdAndDelete(req.params.id);
    res.json({ message: 'Todo deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;