import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
    initialState:[],
    name: 'taskSlice',
    reducers:{
        addTask:(state,action)=>{
            const taskClone = {id:state.length,...action.payload};
            state.push(taskClone);
        },
        deleteTask:(state,action)=>{
            return state.filter((task) => task.id !== action.payload.id)
        },
    }
})

export const {addTask,deleteTask} = taskSlice.actions;
export default taskSlice.reducer;
