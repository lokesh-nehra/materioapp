'use-client';
import React from 'react';
import TaskColumn from './TaskColumn';

const TaskBoard = () => {
    return(
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 min-w-[800px] gap-20'>
            <TaskColumn status="todo" title="TO DO"  />
            <TaskColumn status="inProgress" title="In Prgoress"  />
            <TaskColumn status="done" title="Review Requested" />

            <div className=""></div>
        
        </div>
    );
};
export default TaskBoard;