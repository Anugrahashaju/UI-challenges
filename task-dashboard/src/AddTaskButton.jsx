import React from 'react';

const AddTaskButton = ({ onClick }) => {
  return (
    <div className="add-task">
      <button onClick={onClick}>Add New Task</button>
    </div>
  );
};

export default AddTaskButton;
