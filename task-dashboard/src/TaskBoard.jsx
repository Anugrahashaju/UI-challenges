import React, { useState } from 'react';
import TaskColumn from './TaskColumn';
import AddTaskButton from './AddTaskButton';
import AddTaskForm from './AddTaskForm';

const TaskBoard = () => {
  const [columns, setColumns] = useState({
    'To Do': [
      { title: 'Design login screen', priority: 'high', assignee: 'Asha' },
      { title: 'Create wireframes', priority: 'medium', assignee: 'Vikram' }
    ],
    'In Progress': [
      { title: 'API Integration', priority: 'high', assignee: 'Meena' }
    ],
    'Done': [
      { title: 'Setup Git Repo', priority: 'low', assignee: 'Raj' }
    ]
  });

  const [showForm, setShowForm] = useState(false);

  const columnOrder = ['To Do', 'In Progress', 'Done'];

  const addTask = (task, column) => {
    setColumns(prev => ({
      ...prev,
      [column]: [...prev[column], task]
    }));
    setShowForm(false);
  };

  const moveTaskForward = (columnName, taskIndex) => {
    const currentIndex = columnOrder.indexOf(columnName);
    if (currentIndex === -1 || currentIndex === columnOrder.length - 1) return;

    const nextColumn = columnOrder[currentIndex + 1];
    const taskToMove = columns[columnName][taskIndex];

    setColumns(prev => {
      const updatedCurrent = [...prev[columnName]];
      updatedCurrent.splice(taskIndex, 1);

      return {
        ...prev,
        [columnName]: updatedCurrent,
        [nextColumn]: [...prev[nextColumn], taskToMove]
      };
    });
  };

  return (
    <div>
      <h1>Task Management Dashboard</h1>
      <AddTaskButton onClick={() => setShowForm(true)} />
      {showForm && <AddTaskForm onAdd={addTask} onClose={() => setShowForm(false)} />}
      <div className="dashboard">
        {Object.entries(columns).map(([title, tasks]) => (
          <TaskColumn
            key={title}
            title={title}
            tasks={tasks}
            onTaskClick={(index) => moveTaskForward(title, index)}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskBoard;
