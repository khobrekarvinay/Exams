import React, { useState, useCallback } from 'react';
import { useTasks } from '../TaskContext';

const TaskComponent = () => {
  const { tasks, dispatch } = useTasks(); // Get tasks and dispatch from context
  const [taskText, setTaskText] = useState(''); // State for new task text
  const [isEditing, setIsEditing] = useState(false); // To track edit mode
  const [currentTaskId, setCurrentTaskId] = useState(null); // Track which task is being edited

  // Add new task
  const addTask = useCallback(() => {
    if (taskText.trim()) {
      dispatch({ type: 'ADD_TASK', payload: taskText });
      setTaskText(''); // Reset input
    }
  }, [taskText, dispatch]);

  // Edit an existing task
  const editTask = useCallback((task) => {
    setTaskText(task.text);
    setIsEditing(true);
    setCurrentTaskId(task.id);
  }, []);

  // Update the task after editing
  const updateTask = useCallback(() => {
    dispatch({ type: 'UPDATE_TASK', payload: { id: currentTaskId, text: taskText } });
    setTaskText(''); // Reset input
    setIsEditing(false);
    setCurrentTaskId(null);
  }, [taskText, currentTaskId, dispatch]);

  // Toggle task completion
  const toggleTask = useCallback((id) => {
    dispatch({ type: 'TOGGLE_TASK', payload: id });
  }, [dispatch]);

  // Delete task
  const deleteTask = useCallback((id) => {
    dispatch({ type: 'DELETE_TASK', payload: id });
  }, [dispatch]);

  return (
    <div>
      <h1>Task Manager</h1>

      {/* Input for adding or updating task */}
      <input 
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={isEditing ? updateTask : addTask}>
        {isEditing ? 'Update Task' : 'Add Task'}
      </button>

      {/* Task list */}
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <span
              style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            >
              {task.text}
            </span>
            <button onClick={() => toggleTask(task.id)}>
              {task.completed ? 'Unmark' : 'Complete'}
            </button>
            <button onClick={() => editTask(task)}>Edit</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskComponent;
