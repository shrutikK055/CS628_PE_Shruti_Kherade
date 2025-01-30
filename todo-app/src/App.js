import React, { useState } from 'react';
import './styles.css';  // Import styles.css

const TodoTask = ({ todo, index, handleDeleteTask }) => {
  return (
    <li className="todo-item">
      <span>{todo}</span>
      <button onClick={() => handleDeleteTask(index)} className="delete-task-button">
        Delete
      </button>
    </li>
  );
};

const TodoList = ({ todos, handleDeleteTask }) => {
  return (
    <ul className="list-none p-0">
      {todos.map((todo, index) => (
        <TodoTask key={index} todo={todo} index={index} handleDeleteTask={handleDeleteTask} />
      ))}
    </ul>
  );
};

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task.trim()) {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">ToDo List App</h1>
      <div className="flex flex-col gap-2 mb-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
          className="border rounded px-2 py-1"
        />
        <button onClick={handleAddTask} className="add-task-button">
          Add Task
        </button>
      </div>
      <TodoList todos={todos} handleDeleteTask={handleDeleteTask} />
    </div>
  );
};

export default TodoApp;
