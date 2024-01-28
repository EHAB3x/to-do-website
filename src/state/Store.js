import { configureStore } from "@reduxjs/toolkit";
import  taskSlice  from "./Slices/addTaskSlice";
import deletedTasks from "./Slices/deletedTasks";
import  favTasksSlice  from "./Slices/favTasks";
import finishedTasksSlice from "./Slices/finishedTasksSlice";

export default configureStore({
    reducer:{
        tasks : taskSlice,
        deletedTasks : deletedTasks,
        favTasks : favTasksSlice,
        doneTasks: finishedTasksSlice,
    }
})