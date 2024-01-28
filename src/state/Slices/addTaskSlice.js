import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
    initialState:[],
    name: 'taskSlice',
    reducers:{
        addTask:(state,action)=>{
            const taskClone = {id:state.length,...action.payload,key:state.length,fav:false};
            state.push(taskClone);
        },
        deleteTask:(state,action)=>{
            return state.filter((task) => task.id !== action.payload.id)
        },
        editStatus:(state,action)=>{
             state[action.payload.id].status = "done"; 
        },
        editFav:(state,action)=>{
            state[action.payload.id].fav = !action.payload.fav;
        },
    }
})

export const {addTask, deleteTask, editStatus,editFav} = taskSlice.actions;
export default taskSlice.reducer;
