import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
    initialState:[],
    name: 'taskSlice',
    reducers:{
        addTask:(state,action)=>{
            const taskClone = {...action.payload, id:state.length, key:state.length, fav:false, delete:false,notes:''};
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
        editTask:(state,action)=>{
            state[action.payload.id] = {...state[action.payload.id],...action.payload}
        }
    }
})

export const {addTask, editDelete, editStatus,editFav,editTask} = taskSlice.actions;
export default taskSlice.reducer;
