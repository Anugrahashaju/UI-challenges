import React from 'react';
import TaskCard from './TaskCard';

const TaskColumn = ({ title, tasks, onTaskClick }) => {
  const isDone = title === 'Done';

  return (
    <div className="column">
      <h2>{title}</h2>
      {tasks.map((task, index) => (
        <TaskCard
          key={index}
          title={task.title}
          priority={task.priority}
          assignee={task.assignee}
          onClick={() => onTaskClick(index)}
          isDone={isDone}
        />
      ))}
    </div>
  );
};

export default TaskColumn;
