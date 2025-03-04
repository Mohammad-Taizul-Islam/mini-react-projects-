import React from 'react';
import { TodoProvider } from './context/TodoContext';
import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';
import './App.css';

export default function App() {
  return (
    <TodoProvider>
      <div className="app">
        <h1>Todo List</h1>
        <AddTodo />
        <TodoList />
      </div>
    </TodoProvider>
  );
};
