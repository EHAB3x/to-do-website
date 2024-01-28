import { configureStore } from "@reduxjs/toolkit";
import  taskSlice  from "./Slices/addTaskSlice";
import deletedTasks from "./Slices/deletedTasks";
import  favTasksSlice  from "./Slices/favTasks";

export default configureStore({
    reducer:{
        tasks : taskSlice,
        deletedTasks : deletedTasks,
        favTasks : favTasksSlice,
    }
})