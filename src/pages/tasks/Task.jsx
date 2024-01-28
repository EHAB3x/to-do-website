import './Tasks.css';
import { FaHeart } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask } from '../../state/Slices/addTaskSlice';
import { addToDeletedTasks } from '../../state/Slices/deletedTasks';
import { useState } from 'react';
import { addToFavTasks } from '../../state/Slices/favTasks';
const Task = () => {
    const[deleteClass,setDeleteClass] = useState([]);
    const tasks = useSelector(state => state.tasks);
    const dispatch = useDispatch();

    const deletedTask =(deletedTask)=>{
        setDeleteClass([...deleteClass,deletedTask.id]);
        setTimeout(() => {
            setDeleteClass([])
            dispatch(addToDeletedTasks(deletedTask));
            dispatch(deleteTask(deletedTask));
        }, 700);
    }

    const favtasks = (favtask)=>{
        dispatch(addToFavTasks(favtask))
    }
  return (
    <div  className='tasks sm:px-[20px] px-[20px] grid sm:grid-cols-3 sm:gap-16 gap-8'>
        {tasks.map(task =>(
            <div className={`task ${deleteClass.includes(task.id) ?'delete' :''}`} key={task.id}>
                <div className="top">
                    <div className='left'>
                        <h2>{task.title}</h2>
                        <p>{task.category}</p>
                    </div>

                    <div className='right'>
                        <button>Done</button>
                    </div>
                </div>

                <div className="mid mt-[8%]">
                        <p>{task.desc}</p>
                </div>

                <div className="bottom mt-[8%]">
                    <p>End Date: <span>{task.date}</span></p>
                    <div className="icons">
                        <FaHeart className='fav' onClick={(e)=>{
                            e.currentTarget.classList.toggle('fill')
                            dispatch(addToFavTasks({...task,key:task.id}));
                            }}/>
                        <CiEdit className='edit'/>
                        <MdDeleteOutline className='del'  onClick={()=>deletedTask(task)}/>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Task