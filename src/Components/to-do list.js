// import React from "react";
import React, { useState } from 'react';

function TodoList() {
    const [tasks, setTasks] = useState([]);
    
    const [newTask, setNewTask] = useState('');
    const handleInputChange = (event) => {
        setNewTask(event.target.value);
      };
      const handleFormSubmit = (event) => {
        event.preventDefault();
        if (newTask.trim() !== '') {
          setTasks([...tasks, newTask.trim()]);
          setNewTask('');
        }
      };
    // You can add more state variables as needed.

    const handleTaskCompletion = (index) => {
        // Copy the current tasks array to modify it
        const updatedTasks = [...tasks];
        // Toggle the completion status for the task at the given index
        updatedTasks[index] = 'Completed: ' + updatedTasks[index];
        setTasks(updatedTasks);
      };
    
      const handleTaskDeletion = (index) => {
        // Copy the current tasks array to modify it
        const updatedTasks = [...tasks];
        // Remove the task at the given index
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    
      }
    



  

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Enter your task..."
        />
        <button type="submit">Add Task</button>
      </form>
      {/* Your JSX code for displaying the to-do list */}

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              onChange={() => handleTaskCompletion(index)}
            />
            {task}
            <button onClick={() => handleTaskDeletion(index)}>Delete</button>
          </li>
        ))}
      </ul>


    </div>
  );

  }
    
  
  export default TodoList;
  
