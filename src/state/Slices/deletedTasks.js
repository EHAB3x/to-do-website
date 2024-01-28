import { createSlice } from "@reduxjs/toolkit";

export const deletedTasks = createSlice({
    initialState:[],
    name: 'deletedTasksSlice',
    reducers:{
        addToDeletedTasks:(state,action)=>{
            const deletedTasksClone = {id:state.length,...action.payload};
            state.push(deletedTasksClone);
        }
    }
})

export const {addToDeletedTasks} = deletedTasks.actions;
export default deletedTasks.reducer;