import { configureStore } from "@reduxjs/toolkit";
import  taskSlice  from "./Slices/addTaskSlice";
import deletedTasks from "./Slices/deletedTasks";

export default configureStore({
    reducer:{
        tasks : taskSlice,
        deletedTasks : deletedTasks,
    }
})