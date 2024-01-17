import { configureStore } from "@reduxjs/toolkit";
import  taskSlice  from "./Slices/addTaskSlice";

export default configureStore({
    reducer:{
        tasks : taskSlice,
    }
})