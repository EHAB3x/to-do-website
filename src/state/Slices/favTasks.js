import { createSlice } from "@reduxjs/toolkit";

export const favTasksSlice = createSlice({
    initialState: [],
    name: "favTasksSlice",
    reducers: {
        addToFavTasks: (state, action) => {
            const existingTaskIndex = state.findIndex((task) => task.id === action.payload.id);
            if (existingTaskIndex !== -1) {
                state.splice(existingTaskIndex, 1);
            } else {
                const favClone = { id: state.length, ...action.payload };
                state.push(favClone);
            }
        },
    },
});
export const {addToFavTasks} = favTasksSlice.actions;
export default favTasksSlice.reducer;