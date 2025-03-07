import React, { useState } from 'react';
import Modal from './components/Modal/Modal';
import Form from './components/Form/Form';
import TaskList from './components/TaskList/TaskList';
import './App.css';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null); // Track the task being edited

  const handleOpenModal = (task = null) => {
    setCurrentTask(task); // Set the task to edit (or null for adding)
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setCurrentTask(null); // Reset the current task
    setIsModalOpen(false);
  };

  const handleFormSubmit = (formData) => {
    if (currentTask) {
      // Edit an existing task
      const updatedTasks = tasks.map((task) =>
        task === currentTask ? { ...task, ...formData } : task
      );
      setTasks(updatedTasks);
    } else {
      // Add a new task
      const newTask = { ...formData, id: Date.now() }; // Add a unique ID
      setTasks([...tasks, newTask]);
    }
    handleCloseModal();
  };

  const handleDeleteTask = (taskToDelete) => {
    const updatedTasks = tasks.filter((task) => task !== taskToDelete);
    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <h1>Todo Task List</h1>
      <button onClick={() => handleOpenModal()}>Add Task</button>

      <TaskList tasks={tasks} onEdit={handleOpenModal} onDelete={handleDeleteTask} />

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title={currentTask ? 'Edit Task' : 'Add Task'}>
        <Form onSubmit={handleFormSubmit} initialData={currentTask} />
      </Modal>
    </div>
  );
};

export default App;