import React, { useContext, useState } from 'react';
import { TodoContext } from '../context/TodoContext';

export const TodoList = () => {
  const { todos, toggleTodo, deleteTodo, editTodo } = useContext(TodoContext);
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  const handleEdit = (id, text) => {
    setEditingId(id);
    setEditText(text);
  };

  const handleSave = (id) => {
    editTodo(id, editText);
    setEditingId(null);
    setEditText('');
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {editingId === todo.id ? (
            <>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button onClick={() => handleSave(todo.id)}>Save</button>
            </>
          ) : (
            <>
              <span
                style={{
                  textDecoration: todo.completed ? 'line-through' : 'none',
                  cursor: 'pointer',
                }}
                onClick={() => toggleTodo(todo.id)}
              >
                {todo.text}
              </span>
              <button onClick={() => handleEdit(todo.id, todo.text)}>Edit</button>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};