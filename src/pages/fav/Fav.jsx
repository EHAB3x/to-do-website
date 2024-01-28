import React from 'react'
import './Fav.css'
import { FaHeart } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask, editFav, editStatus } from '../../state/Slices/addTaskSlice';
import { addToDeletedTasks } from '../../state/Slices/deletedTasks';
import { useState } from 'react';
import { addToFavTasks } from '../../state/Slices/favTasks';
import { addToFinishedTasks } from '../../state/Slices/finishedTasksSlice';
import { Link } from 'react-router-dom';
const Fav = () => {
    const[deleteClass,setDeleteClass] = useState([]);
    const[finishClass,setFinishClass] = useState([]);

    const favTasks = useSelector(state => state.favTasks);
    const dispatch = useDispatch();

    const deletedTask =(deletedTask)=>{
        setDeleteClass([...deleteClass,deletedTask.id]);
        setTimeout(() => {
            setDeleteClass([])
            dispatch(addToDeletedTasks(deletedTask));
            dispatch(deleteTask(deletedTask));
        }, 700);
    }

    const finishedTask =(fTask)=>{
        setFinishClass([...finishClass,fTask.id]);
        console.log(fTask.id);
        setTimeout(() => {
            dispatch(addToFinishedTasks(fTask));
            dispatch(editStatus(fTask));
        }, 700);
    }
  return (
    <div  className='tasks sm:px-[20px] px-[20px] grid sm:grid-cols-3 sm:gap-16 gap-8'>
        {favTasks.map(task =>(
            <div className={`task ${task.status === 'done' ?'hidden':''}  ${finishClass.includes(task.id) ?'finish' :''}  ${deleteClass.includes(task.id) ?'delete' :''}`} key={task.id}>
                <div className="top">
                    <div className='left'>
                        <h2>{task.title}</h2>
                        <p>{task.category}</p>
                    </div>

                    <div className='right'>
                        <button onClick={()=> finishedTask(task)}>Done</button>
                    </div>
                </div>

                <div className="mid mt-[8%]">
                        <p>{task.desc}</p>
                </div>

                <div className="bottom mt-[8%]">
                    <p>End Date: <span>{task.date}</span></p>
                    <div className="icons">
                        <FaHeart className={`fav ${task.fav === true ? 'fill' : ''}`} onClick={(e)=>{
                            dispatch(addToFavTasks({...task,fav:true}));
                            dispatch(editFav(task));
                        }}/>
                        <Link to={`tasks/${task.id}`}><CiEdit className='edit' /></Link>
                        <MdDeleteOutline className='del'  onClick={()=>deletedTask(task)}/>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Fav