import React, { useState, useContext, useCallback } from 'react';
import TaskContext from '../TaskContext';

const TaskInputComponent = ({ editTask, setEditTask }) => {
  const { dispatch } = useContext(TaskContext);
  const [input, setInput] = useState(editTask ? editTask.text : '');

  const handleAddOrUpdateTask = useCallback(() => {
    if (editTask) {
      dispatch({ type: 'UPDATE_TASK', payload: { id: editTask.id, text: input } });
      setEditTask(null);
    } else {
      dispatch({ type: 'ADD_TASK', payload: input });
    }
    setInput('');
  }, [input, editTask, dispatch, setEditTask]);

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={handleAddOrUpdateTask}>
        {editTask ? 'Update Task' : 'Add Task'}
      </button>
    </div>
  );
};

export default TaskInputComponent;
