import React, { useContext, useCallback, useState } from 'react';
import TaskContext from '../TaskContext';
import TaskInputComponent from './TaskInputComponent';

const TaskListComponent = () => {
  const { tasks, dispatch } = useContext(TaskContext);
  const [editTask, setEditTask] = useState(null);

  const handleDelete = useCallback((id) => {
    dispatch({ type: 'DELETE_TASK', payload: id });
  }, [dispatch]);

  const handleToggleComplete = useCallback((id) => {
    dispatch({ type: 'TOGGLE_TASK', payload: id });
  }, [dispatch]);

  return (
    <div>
      <TaskInputComponent editTask={editTask} setEditTask={setEditTask} />
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.text}
            </span>
            <button onClick={() => setEditTask(task)}>Edit</button>
            <button onClick={() => handleToggleComplete(task.id)}>
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskListComponent;
