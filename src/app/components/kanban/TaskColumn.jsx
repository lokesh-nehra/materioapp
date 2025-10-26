'use-client';
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { moveTask, reorderTask } from "./redux/taskSlice";
import TaskCard from "./TaskCard";

const TaskColumn = ({ status, title}) => {
  const tasks = useSelector((state) => state.tasks[status]);
  const dispatch = useDispatch();

  const handleDrop = (e) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("taskId");
    const from = e.dataTransfer.getData("from");
    console.log(e.dataTransfer.getData("dragIndex"));
    const dragIndex = parseInt(e.dataTransfer.getData("dragIndex"));

    if (from !== status) {
      dispatch(moveTask({ from, to: status, taskId }));
    } 
    else{
      // reordering within same column
      const dropIndex = parseInt(e.target.closest('.task-card')?.dataset.index || 0);
      if (dragIndex !== dropIndex) {
        dispatch(reorderTask({ status, dragIndex, dropIndex }));
      }
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="col rounded-xl h-[450px] bg-[#e8e8e8] p-2 min-w-[280px] "
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      >
      <div
        className={`p-3  rounded-xl mb-3 mt-3 d-flex align-items-center  h-12`}
        style={{
          backgroundColor: status === "todo" ? "rgb(49 109 194)" : "#FFCC33",
        }}
      >
        <h5 className={`text-white transform translate-y-[-14px] font-medium`}>
          <span
            style={{
              border: "2px solid white",
              borderRadius: "50%",
              display: "inline-block",
              marginTop: "12px",
              transform: "translateY(-1.5px)"
            }}
            className="border-[50%] w-[30px] h-[30px] "
          >
            <p
              className="text-[17px] transform translate-y-[-0.5px] translate-x-2"
            >
              {tasks.length}
            </p>
          </span>{" "}
          &nbsp;{title}
        </h5>
      </div>

      <div>
        {tasks.length === 0 ? (
          <div className="mt-10 pl-18" > 
            <img
              src="https://www.alliancetek.com/new_design/images/lagacy-system/lagecy-syatem-challenges-2.svg"
              alt="responsive-image"
              className="img-fluid max-h-[100px] mt-20 "
              style={{ marginBottom:'18px' }}
            />
            <p className="text-gray-400 text-[15px] ml-4">No Task</p>
          </div>
        ) : (
          tasks.map((task, index) => (
            <TaskCard key={task.id} task={task} status={status} index={index}/>
          ))
        )}
      </div>
    </div>
  );
};

export default TaskColumn;
