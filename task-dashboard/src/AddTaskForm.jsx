import React, { useState } from 'react';

const AddTaskForm = ({ onAdd, onClose }) => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('low');
  const [assignee, setAssignee] = useState('');
  const [column, setColumn] = useState('To Do');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !assignee.trim()) return;
    onAdd({ title, priority, assignee }, column);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Add New Task</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Task title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Assignee"
            value={assignee}
            onChange={e => setAssignee(e.target.value)}
            required
          />
          <select value={priority} onChange={e => setPriority(e.target.value)}>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
          <select value={column} onChange={e => setColumn(e.target.value)}>
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
          <button type="submit">Add Task</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default AddTaskForm;
