import React, { useState } from "react";
import "/src/index.css";

export default function Todo() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const removeTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const toggleTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="todo" id="todolist">
      <div className="todo-container">
        <h1 className="todo-titulo">Todo List</h1>
        <div className="input-container">
          <input
            className="kk"
            type="text"
            placeholder="Add a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button className="botonad" onClick={addTask}>
            Add
          </button>
        </div>
        <ul className="task-list">
          {tasks.map((task) => (
            <li
              key={task.id}
              id="lipu"
              className={task.completed ? "completed" : ""}
            >
              <span>{task.text}</span>
              <div>
                <button
                  className="buttontodo"
                  onClick={() => toggleTask(task.id)}
                >
                  Done
                </button>
                <button
                  className="buttontodo"
                  onClick={() => removeTask(task.id)}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
