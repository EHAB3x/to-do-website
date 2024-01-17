import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
    initialState:[],
    name: 'taskSlice',
    reducers:{
        addTask:(state,action)=>{
            const taskClone = {...action.payload, status:"in progress"};
            state.push(taskClone);
        }
    }
})

export const {addTask} = taskSlice.actions;
export default taskSlice.reducer;
