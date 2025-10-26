import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    todo:[
        {
            id: 't1',
            title:'T-2-1-06',
            activity:'---',
            assignee:'Mahesh sir '  
        },
        {
            id: 't2',
            title:'T-2-1-07',
            activity:'---',
            assignee:'Mahesh sir '
        }
    ],
    inProgress:[],
    done:[]
}
const taskSlice = createSlice({
    name:'tasks',
    initialState,
    reducers:{
        moveTask: (state, action)=>{
            const {from, to, taskId} =  action.payload;

            const taskIndex = state[from].findIndex( task => task.id === taskId);
            if(taskIndex == -1){ return;}

            const removedTasks = state[from].splice(taskIndex, 1);
            const task = removedTasks[0];

            state[to].push(task);
        },

        reorderTask: (state, action) => {
        const { status, dragIndex, dropIndex } = action.payload;
        const draggedTask = state[status][dragIndex];
        state[status].splice(dragIndex, 1);
        state[status].splice(dropIndex, 0, draggedTask);
    }
    }

});

export const{ moveTask, reorderTask } = taskSlice.actions;
export default taskSlice.reducer;