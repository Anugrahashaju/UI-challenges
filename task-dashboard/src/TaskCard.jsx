import React from 'react';

const TaskCard = ({ title, priority, assignee, onClick, isDone }) => {
  return (
    <div
      className={`task-card ${isDone ? 'done-task' : ''}`}
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      <div className="task-title">{title}</div>
      <div className="meta">
        <span className={`priority ${priority}`}>{priority.charAt(0).toUpperCase() + priority.slice(1)}</span>
        Assigned to: {assignee}
      </div>
    </div>
  );
};

export default TaskCard;
