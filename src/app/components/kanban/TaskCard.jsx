'use-client';
import React from "react";

const TaskCard = ({ task, status, index }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("taskId", task.id);
    e.dataTransfer.setData("from", status);
    e.dataTransfer.setData("dragIndex", index.toString()); 
    // console.log("dragIndex", index);
    // console.log("dragIndex", index.toString()); this is console.log
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="card mb-3 w-full rounded-xl bg-gray-50 p-3 shadow-xs"
      style={{ cursor: "pointer", height:"150px"}}
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      data-index={index} 
    >
      <div className="card-body w-full bg-pimary d-flex flex-column">
        <h6 className="card-title text-start" style={{ color: "rgb(49 109 194)" }}>
          {task.title}
        </h6>
        <p className="card-text text-start mb-1 text-muted">
          <strong className='text-secondary'>Activity:</strong>&nbsp; {task.activity}
        </p>
        <p className="card-text text-start mb-1 text-muted" style={{borderBottom:'1px solid lightgrey', paddingBottom:"10px"}}>
          <strong className='text-secondary'>Due Date &nbsp;&nbsp;</strong>---
        </p>
        <p className="card-text text-start mb-1 text-muted">
          <strong className='text-secondary'>Assignee:</strong> {task.assignee}
        </p>
      </div>
    </div>
  );
};

export default TaskCard;
