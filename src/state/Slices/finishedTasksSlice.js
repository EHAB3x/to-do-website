import { createSlice } from "@reduxjs/toolkit";

export const finishedTasksSlice = createSlice({
    initialState:[],
    name: 'finishedTasksSlice',
    reducers:{
        addToFinishedTasks:(state, action)=>{
            const finishedClone ={id:state.length,...action.payload,status:"done"};
            state.push(finishedClone);
        }
    }
})

export const {addToFinishedTasks} = finishedTasksSlice.actions;
export default finishedTasksSlice.reducer;