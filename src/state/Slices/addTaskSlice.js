import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
    initialState:[],
    name: 'taskSlice',
    reducers:{
        addTask:(state,action)=>{
            const taskClone = {...action.payload, id:state.length, key:state.length, fav:false, delete:false};
            state.push(taskClone);
        },
        editDelete:(state,action)=>{
            state[action.payload.id].delete = !action.payload.delete;   
        },
        editStatus:(state,action)=>{
            state[action.payload.id].status = !action.payload.status; 
        },
        editFav:(state,action)=>{
            state[action.payload.id].fav = !action.payload.fav;
        },
    }
})

export const {addTask, editDelete, editStatus,editFav} = taskSlice.actions;
export default taskSlice.reducer;
