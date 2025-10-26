'use client';
import React from "react";
import TaskBoard from "@/app/components/kanban/TaskBoard";

const KanbanBoard = () => {
    return(
        <div className="grid grid-cols-3 max-w-[900px] max-h-[500px] px-4 py-5 ml-[310px] mt-[80px] rounded-md "> 
            <TaskBoard/>
        </div>
    );
}

export default KanbanBoard;